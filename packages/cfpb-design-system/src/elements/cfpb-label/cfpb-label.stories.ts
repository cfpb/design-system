/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbLabelProps } from '../../../../../storybook/custom-elements-types';
import { CfpbLabel } from './index.js';

CfpbLabel.init();

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
  // Label and helper text content in a `<div>`. Controls only have text.
  render: ({ 'label-slot': label, 'helper-slot': helper, ...args }) =>
    template(
      args,
      html`${label ? html`<div slot="label">${label}</div>` : nothing}
      ${helper ? html`<div slot="helper">${helper}</div>` : nothing}`,
    ),
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
