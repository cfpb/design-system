/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn, userEvent, expect } from 'storybook/test';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbExpandableProps } from '../../../../../storybook/custom-elements-types';
import { CfpbExpandable } from './index.js';

CfpbExpandable.init();

/**
 * `properties` is excluded here. See `cfpb-button.stories.ts` for the reason.
 * Specifically here `isExpanded` and `open` both describe once piece of state.
 * `template()` binds both applying the prop _after_ the attribute. Leaving them in
 * lets `isExpanded` default collapse the Expanded story. The prop still works on the
 * element. See the behavior tests.....
 */
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
    'content-slot': '<p>Expandable section content</p>',
  },
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<ExpandableStoryArgs>;

/**
 * The component has two visual states so it has two stories.
 * All four of its events are driven by the same click that moves between
 * these states so each story asserts the begin/end pair for its own
 * direction rather than splitting into a story per event.
 *
 * Programatic expand/collapse is covered in index.spec.js
 * See STORYBOOK.md for the split.
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

export const Default: Story = {
  args: { open: false },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const onExpandBegin = fn();
    const onExpandEnd = fn();
    expandable.addEventListener('expandbegin', onExpandBegin);
    expandable.addEventListener('expandend', onExpandEnd);

    const button = expandable.shadowRoot!.querySelector('button')!;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;

    await userEvent.click(button);
    await expect(onExpandBegin).toHaveBeenCalledOnce();

    finishTransition(content);
    await expect(onExpandEnd).toHaveBeenCalledOnce();
  },
};

export const Expanded: Story = {
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const onCollapseBegin = fn();
    const onCollapseEnd = fn();
    expandable.addEventListener('collapsebegin', onCollapseBegin);
    expandable.addEventListener('collapseend', onCollapseEnd);

    const button = expandable.shadowRoot!.querySelector('button')!;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;
    await userEvent.click(button);
    await expect(onCollapseBegin).toHaveBeenCalledOnce();

    finishTransition(content);
    await expect(onCollapseEnd).toHaveBeenCalledOnce();
  },
};
