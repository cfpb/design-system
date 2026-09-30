/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbButtonProps } from '../../../../../storybook/custom-elements-types';
import { CfpbButton } from './index.js';
import { iconControl } from '../../../../../.storybook/plugins/story-helpers';

CfpbButton.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbButtonProps>(
  'cfpb-button',
  { excludeCategories: ['methods', 'properties'] },
);

type ButtonStoryArgs = CfpbButtonProps & { 'default-slot'?: string };

const meta: Meta<ButtonStoryArgs> = {
  title: 'Web Components/cfpb-button',
  component: 'cfpb-button',
  tags: ['autodocs'],
  args: {
    ...args,
    variant: 'primary',
    'default-slot': 'Button label',
  },
  argTypes: {
    ...argTypes,
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warning'],
    },
    'icon-left': iconControl(),
    'icon-right': iconControl(),
  },
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<ButtonStoryArgs>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Warning: Story = {
  args: { variant: 'warning' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AsLink: Story = {
  args: {
    href: '#',
    'style-as-link': true,
  },
};

export const WithIcon: Story = {
  args: {
    'icon-right': 'download',
  },
};

export const WithSpinningIcon: Story = {
  args: {
    'icon-left': 'update',
    'icon-left-spin': true,
  },
};
