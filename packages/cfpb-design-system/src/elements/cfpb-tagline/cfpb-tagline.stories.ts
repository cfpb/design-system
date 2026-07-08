/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbTaglineProps } from '../../../../../storybook/custom-elements-types.d.ts';
import { CfpbTagline } from './index.js';

CfpbTagline.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbTaglineProps>(
  'cfpb-tagline',
  { excludeCategories: ['methods'] },
);

type TagLineStoryArgs = CfpbTaglineProps & { 'default-slot'?: string };

const meta: Meta<TagLineStoryArgs> = {
  title: 'Web Components/cfpb-tagline',
  component: 'cfpb-tagline',
  tags: ['autodocs'],
  args,
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<TagLineStoryArgs>;

export const Default: Story = {};

export const Large: Story = {
  args: { isLarge: true },
};
