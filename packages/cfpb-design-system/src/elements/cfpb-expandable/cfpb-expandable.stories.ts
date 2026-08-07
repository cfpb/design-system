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

export const Default: Story = {
  args: { open: false },
};

export const ExpandBegin: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('expandbegin', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    await userEvent.click(button);

    await expect(spy).toHaveBeenCalledOnce();
  },
};

export const Expanded: Story = {
  args: { open: true },
};

export const CollapseOnClick: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('collapseend', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;
    await userEvent.click(button);

    // BaseTransition registers on 'webketTransitionEnd' in Chromium (first match
    // in its prefix map), so the synthetic event must use that name (not transitioned)
    content.dispatchEvent(
      new TransitionEvent('webkitTransitionEnd', {
        propertyName: 'max-height',
      }),
    );

    await expect(spy).toHaveBeenCalledOnce();
  },
};

export const CollapseProgrammatically: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const button = expandable.shadowRoot!.querySelector('button')!;
    expandable.isExpanded = false;
    await expandable.updateComplete;

    await expect(expandable.isExpanded).toBe(false);
    await expect(button.getAttribute('aria-expanded')).toBe('false');
  },
};

export const ExpandProgramamatically: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: false },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;
    expandable.isExpanded = true;
    await expandable.updateComplete;

    // The prop reflects to the attribute and drives the flyout open
    await expect(expandable.hasAttribute('open')).toBe(true);
    await expect(content.hasAttribute('hidden')).toBe(false);
    await expect(content.classList.contains('u-max-height-default')).toBe(true);
  },
};

export const ExpandEnd: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('expandend', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;
    await userEvent.click(button);

    content.dispatchEvent(
      new TransitionEvent('webkitTransitionEnd', {
        propertyName: 'max-height',
      }),
    );

    await expect(spy).toHaveBeenCalledOnce();
  },
};

export const CollapseBegin: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('collapsebegin', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    await userEvent.click(button);

    await expect(spy).toHaveBeenCalledOnce();
  },
};
