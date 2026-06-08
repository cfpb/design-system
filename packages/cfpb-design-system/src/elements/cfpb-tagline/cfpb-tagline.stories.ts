/// <reference types="vite/client" />
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbTaglineProps } from '../../../../../storybook/custom-elements-types.d.ts';
import { CfpbTagline } from './index.js';

CfpbTagline.init();

const { args, argTypes } = getStorybookHelpers<CfpbTaglineProps>(
  'cfpb-tagline',
  { excludeCategories: ['methods'] },
);

const meta: Meta<CfpbTaglineProps> = {
  title: 'Web Components/cfpb-tagline',
  component: 'cfpb-tagline',
  tags: ['autodocs'],
  args,
  argTypes,
  render: ({ isLarge }) =>
    html`<cfpb-tagline ?isLarge="${isLarge}"></cfpb-tagline>`,
};

export default meta;

type Story = StoryObj<CfpbTaglineProps>;

export const Default: Story = {};

export const Large: Story = {
  args: { isLarge: true },
};
