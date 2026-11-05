/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbCheckboxIconProps } from '../../../../../storybook/custom-elements-types';
import { CfpbCheckboxIcon } from './index.js';

CfpbCheckboxIcon.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbCheckboxIconProps>(
  'cfpb-checkbox-icon',
  { excludeCategories: ['methods', 'properties'] },
);

const meta: Meta<CfpbCheckboxIconProps> = {
  title: 'Web Components/cfpb-checkbox-icon',
  component: 'cfpb-checkbox-icon',
  tags: ['autodocs'],
  args,
  argTypes,
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<CfpbCheckboxIconProps>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Borderless: Story = {
  args: { checked: true, borderless: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const ValidationError: Story = {
  args: { validation: 'error' },
};

export const ValidationWarning: Story = {
  args: { validation: 'warning' },
};

export const ValidationSuccess: Story = {
  args: { validation: 'success' },
};
