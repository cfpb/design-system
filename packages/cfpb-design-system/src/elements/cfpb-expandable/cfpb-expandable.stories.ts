/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { keyed } from 'lit/directives/keyed.js';
import { userEvent, expect } from 'storybook/test';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbExpandableProps } from '../../../../../storybook/custom-elements-types';
import { CfpbExpandable } from './index.js';

CfpbExpandable.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbExpandableProps>(
  'cfpb-expandable',
  { excludeCategories: ['methods', 'properties'] },
);

type ExpandableStoryArgs = CfpbExpandableProps & {
  'header-slot'?: string;
  'content-slot'?: string;
};

const meta: Meta<ExpandableStoryArgs> = {
  title: 'Web Components/cfpb-expandable',
  component: 'cfpb-expandable',
  tags: ['autodocs'],
  args: {
    ...args,
    'header-slot': 'Section header',
    'content-slot': 'Expandable section content',
  },
  argTypes,
  // The header is in an `h3` and the content is in a `p`
  // and the controls only have the text. Use keyed from Lit so
  // content edits update and measure height only once.
  render: ({ 'header-slot': header, 'content-slot': content, ...args }) =>
    html`${keyed(
      content,
      template(
        args,
        html`${header ? html`<h3 slot="header">${header}</h3>` : nothing}
        ${content ? html`<p slot="content">${content}</p>` : nothing}`,
      ),
    )} `,
};

export default meta;

type Story = StoryObj<ExpandableStoryArgs>;

type PlayContext = Parameters<NonNullable<Story['play']>>[0];
type Step = [name: string, run: () => Promise<void>];
type Parts = {
  expandable: CfpbExpandable;
  content: Element;
  // Header click and if a new run aborts this one.... give false
  click: () => Promise<boolean>;
};

/**
 * The component has two visual states so it has two stories.
 * Its events are driven by the same click that moves between
 * these states. Each story asserts the begin/end pair for its own
 * direction.
 */

/**
 * Drive the CSS transition to completion.
 *
 * BaseTransition registers on 'webkitTransitionEnd' in Chromium (the first
 * match in its prefix map) so the synthetic event has to use that name
 * rather than the standard 'transitioned'
 * @param {Element} content - The expandable's content element/
 */
function finishTransition(content: Element) {
  content.dispatchEvent(
    new TransitionEvent('webkitTransitionEnd', {
      propertyName: 'max-height',
    }),
  );
}

/**
 * Assert open by reflected attr
 * @param {CfpbExpandable} expandable - Expandable check
 * @param {boolean} open - If it should be open.
 */
async function attrOpen(expandable: CfpbExpandable, open: boolean) {
  if (open) {
    await expect(expandable).toHaveAttribute('open');
  } else {
    await expect(expandable).not.toHaveAttribute('open');
  }
}

/**
 * Expandable events in order
 * @param {CfpbExpandable} expandable - Expandable listen
 * @returns {string[]} Event names in order
 */
function eventRecord(expandable: CfpbExpandable) {
  const events: string[] = [];
  for (const name of [
    'expandbegin',
    'expandend',
    'collapsebegin',
    'collapseend',
  ]) {
    expandable.addEventListener(name, () => events.push(name));
  }
  return events;
}

/**
 * Rerunning the `play` function aborts it but Storybook cant stop it and so it
 * would fail because the newly clicked run would wind up rendering in the wrong
 * state. So stop this run when clicked and report it.
 * @param {PlayContext} context - Play function context
 * @returns {Parts} Expandable parts
 */
function getParts({ canvasElement, abortSignal }: PlayContext): Parts {
  const expandable = canvasElement.querySelector(
    'cfpb-expandable',
  ) as CfpbExpandable;
  const button = expandable.shadowRoot!.querySelector('button')!;

  expandable.shadowRoot!.addEventListener(
    'click',
    (event) => {
      if (abortSignal.aborted) event.stopPropagation();
    },
    { capture: true },
  );

  return {
    expandable,
    content: expandable.shadowRoot!.querySelector('.o-expandable__content')!,
    click: async () => {
      await userEvent.click(button);
      return !abortSignal.aborted;
    },
  };
}

/**
 * Check open arg and go back to the default state for the expandable when it does not equal the
 * story state. We can wind up in a situation where open and story arg doesn't match.  
 * @param {PlayContext} context - Play function context
 * @param {Parts} parts - Expandable parts
 * @returns {Step[]} Fix step when needed
 */
async function fixSteps(
  { args, initialArgs }: PlayContext,
  { expandable, content, click }: Parts,
): Promise<Step[]> {
  const makeOpen = Boolean(args.open);
  const beginOpen = Boolean(initialArgs.open);

  await attrOpen(expandable, makeOpen);

  if (makeOpen === beginOpen) return [];

  return [
    [
      beginOpen ? 'Restore to expanded' : 'Restore to collapsed',
      async () => {
        if (!(await click())) return;
        finishTransition(content);
        await attrOpen(expandable, beginOpen);
      },
    ],
  ];
}

/**
 * Play steps in order making sure to stop when a new run kicks off.
 * Let an intentionally stopped run end gracefully.
 * @param {PlayContext} context - Play function context
 * @param {Step[]} steps - What to run
 */
async function startSteps({ abortSignal, step }: PlayContext, steps: Step[]) {
  for (const [name, run] of steps) {
    if (abortSignal.aborted) return;
    await step(name, run);
  }
}

export const Default: Story = {
  args: { open: false },
  play: async (context) => {
    const parts = getParts(context);
    const { expandable, content, click } = parts;

    await startSteps(context, [
      ...(await fixSteps(context, parts)),
      [
        'Click expand',
        async () => {
          const events = eventRecord(expandable);
          if (!(await click())) return;
          await expect(events).toEqual(['expandbegin']);

          finishTransition(content);
          await expect(events).toEqual(['expandbegin', 'expandend']);
        },
      ],
      [
        'Make collapsed',
        async () => {
          if (!(await click())) return;
          finishTransition(content);
          await attrOpen(expandable, false);
        },
      ],
    ]);
  },
};

export const Expanded: Story = {
  args: { open: true },
  play: async (context) => {
    const parts = getParts(context);
    const { expandable, content, click } = parts;

    await startSteps(context, [
      ...(await fixSteps(context, parts)),
      [
        'Collapse',
        async () => {
          const events = eventRecord(expandable);
          if (!(await click())) return;
          await expect(events).toEqual(['collapsebegin']);

          finishTransition(content);
          await expect(events).toEqual(['collapsebegin', 'collapseend']);
        },
      ],
      [
        'Reset expand',
        async () => {
          if (!(await click())) return;
          finishTransition(content);
          await attrOpen(expandable, true);
        },
      ],
    ]);
  },
};
