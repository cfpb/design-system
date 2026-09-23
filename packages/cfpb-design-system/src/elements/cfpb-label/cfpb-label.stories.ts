/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbLabelProps } from '../../../../../storybook/custom-elements-types';
import { CfpbLabel } from './index.js';

CfpbLabel.init();

// See cfpb-button story for why `properties` is excluded
const { args, argTypes, template } = getStorybookHelpers<CfpbLabelProps>(
  'cfpb-label',
  { excludeCategories: ['methods', 'properties'] },
);

type LabelStoryArgs = CfpbLabelProps & {
  'label-slot'?: string;
  'helper-slot'?: string;
};

const meta: Meta<LabelStoryArgs> = {
  title: 'Web Components/cfpb-label',
  component: 'cfpb-label',
  tags: ['autodocs'],
  args: {
    ...args,
    'label-slot': 'Email address',
    'helper-slot': 'We will only use this to reply to you',
  },
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<LabelStoryArgs>;

export const Default: Story = {};

export const BlockHelper: Story = {
  args: { block: true },
};

export const LabelOnly: Story = {
  args: { 'helper-slot': '' },
};

export const ForAControl: Story = {
  args: { for: 'email-input' },
};
