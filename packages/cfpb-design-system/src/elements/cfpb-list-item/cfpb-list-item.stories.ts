/// <reference types='vite/client' />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { CfpbListItemProps } from '../../../../../storybook/custom-elements-types';
import { CfpbListItem } from './index.js';

CfpbListItem.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbListItemProps>(
  'cfpb-list-item',
  { excludeCategories: ['methods', 'properties'] },
);

type ListItemStoryArgs = CfpbListItemProps & { 'default-slot'?: string };

const meta: Meta<ListItemStoryArgs> = {
  title: 'Web Components/cfpb-list-item',
  component: 'cfpb-list-item',
  tags: ['autodocs'],
  args: {
    ...args,
    'default-slot': 'List item content',
  },
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<ListItemStoryArgs>;

export const Default: Story = {};

export const WithMarkup: Story = {
  args: {
    'default-slot': '<a href="#">A link inside a list item</a>',
  },
};
