/// reference ftyps="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components';
import { fn, userEvent, expect } from 'storybook/test';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbTagFilterProps } from '../../../../../storybook/custom-elements-types.d.ts';
import { CfpbTagFilter } from './index.js';

CfpbTagFilter.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbTagFilterProps>(
  'cfpb-tag-filter',
  { excludeCategories: ['methods'] },
);

type TagFilterStoryArgs = CfpbTagFilterProps & { 'default-slot'?: string };

const meta: Meta<TagFilterStoryArgs> = {
  title: 'Web Components/cfpb-tag-filter',
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

export const Focused: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const tagFilter = canvasElement.querySelector(
      'cfpb-tag-filter',
    ) as CfpbTagFilter;
    await tagFilter.focus();
  },
};
