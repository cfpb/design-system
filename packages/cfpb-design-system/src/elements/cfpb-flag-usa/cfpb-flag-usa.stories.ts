/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbFlagUsaProps } from '../../../../../storybook/custom-elements-types';
import { CfpbFlagUsa } from './index.js';

CfpbFlagUsa.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbFlagUsaProps>(
  'cfpb-flag-usa',
  { excludeCategories: ['methods', 'properties'] },
);

const meta: Meta<CfpbFlagUsaProps> = {
  title: 'Web Components/cfpb-flag-usa',
  component: 'cfpb-flag-usa',
  tags: ['autodocs'],
  args,
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<CfpbFlagUsaProps>;

export const Default: Story = {};
