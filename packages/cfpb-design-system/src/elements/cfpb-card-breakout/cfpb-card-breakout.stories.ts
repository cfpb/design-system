/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbCardBreakoutProps } from '../../../../../storybook/custom-elements-types';
import { CfpbCardBreakout } from './index.js';

CfpbCardBreakout.init();

const markup = 'cfpb-card-breakout';
const title = 'Web Components/cfpb-card-breakout';

// See cfpb-button story for why `properties` is excluded
const { args, argTypes, template } = getStorybookHelpers<CfpbCardBreakoutProps>(
  markup,
  { excludeCategories: ['methods', 'properties'] },
);

type CardBreakoutStoryArgs = CfpbCardBreakoutProps & {
  'default-slot'?: string;
};

const meta: Meta<CardBreakoutStoryArgs> = {
  title,
  component: markup,
  tags: ['autodocs'],
  args: {
    ...args,
    'default-slot': 'Servicemembers and veterans',
  },
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<CardBreakoutStoryArgs>;

export const Default: Story = {};
