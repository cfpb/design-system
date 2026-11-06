/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbFormAlertProps } from '../../../../../storybook/custom-elements-types';
import { CfpbFormAlert } from './index.js';

CfpbFormAlert.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbFormAlertProps>(
  'cfpb-form-alert',
  { excludeCategories: ['methods', 'properties'] },
);

type FormAlertStoryArgs = CfpbFormAlertProps & { 'default-slot'?: string };

const meta: Meta<FormAlertStoryArgs> = {
  title: 'Web Components/cfpb-form-alert',
  component: 'cfpb-form-alert',
  tags: ['autodocs'],
  args: {
    ...args,
    validation: 'error',
    'default-slot': 'Enter a valid email address.',
  },
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<FormAlertStoryArgs>;

export const Error: Story = {};

export const Warning: Story = {
  args: {
    validation: 'warning',
    'default-slot': 'Email cant be verified',
  },
};

export const Success: Story = {
  args: {
    validation: 'success',
    'default-slot': 'Email confirmed',
  },
};
