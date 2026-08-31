/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbTaglineProps } from '../../../../../storybook/custom-elements-types';
import { CfpbTagline } from './index.js';

CfpbTagline.init();

// See cfpb-button story for why `properties` is excluded
const { args, argTypes, template } = getStorybookHelpers<CfpbTaglineProps>(
  'cfpb-tagline',
  { excludeCategories: ['methods', 'properties'] },
);

type TagLineStoryArgs = CfpbTaglineProps & { 'default-slot'?: string };

const meta: Meta<TagLineStoryArgs> = {
  title: 'Web Components/cfpb-tagline',
  component: 'cfpb-tagline',
  tags: ['autodocs'],
  args: {
    ...args,
    'default-slot': 'An official website of the United States government.',
  },
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<TagLineStoryArgs>;

export const Default: Story = {};

export const Large: Story = {
  args: { islarge: true },
};
