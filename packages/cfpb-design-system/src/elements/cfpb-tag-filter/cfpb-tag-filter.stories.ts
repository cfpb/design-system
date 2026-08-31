/// reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn, userEvent, expect } from 'storybook/test';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbTagFilterProps } from '../../../../../storybook/custom-elements-types';
import { CfpbTagFilter } from './index.js';

CfpbTagFilter.init();

// See cfpb-button story for why `properties` is excluded
const { args, argTypes, template } = getStorybookHelpers<CfpbTagFilterProps>(
  'cfpb-tag-filter',
  { excludeCategories: ['methods', 'properties'] },
);

type TagFilterStoryArgs = CfpbTagFilterProps & { 'default-slot'?: string };

const meta: Meta<TagFilterStoryArgs> = {
  title: 'Web Components/cfpb-tag-filter',
  component: 'cfpb-tag-filter',
  tags: ['autodocs'],
  args: {
    ...args,
    'default-slot': 'Tag label',
  },
  argTypes: {
    ...argTypes,
  },
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<TagFilterStoryArgs>;

/**
 * The click interaction stays here because it is a real user interaction
 * and this runs it in Chromium. The event's shape (detail, bubbles, composed), focus(), the
 * for label form and value derivation are covered in index.spec.js.
 * See STORYBOOK.md for the split
 */

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const tagFilter = canvasElement.querySelector(
      'cfpb-tag-filter',
    ) as CfpbTagFilter;
    const spy = fn();
    tagFilter.addEventListener('item-click', spy);

    const button = tagFilter.shadowRoot!.querySelector(
      'button',
    ) as HTMLButtonElement;
    await userEvent.click(button);

    await expect(spy).toHaveBeenCalledOnce();
  },
};
