/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbIconProps } from '../../../../../storybook/custom-elements-types';
import { CfpbIcon } from './index.js';
import { iconControl } from '../../../../../.storybook/plugins/story-helpers';

CfpbIcon.init();

// See cfpb-button story for why `properties` is excluded
const { args, argTypes, template } = getStorybookHelpers<CfpbIconProps>(
  'cfpb-icon',
  { excludeCategories: ['methods', 'properties'] },
);

const meta: Meta<CfpbIconProps> = {
  title: 'Web Components/cfpb-icon',
  component: 'cfbp-icon',
  tags: ['autodocs'],
  args: {
    ...args,
    name: 'approved-round',
  },
  argTypes: {
    ...argTypes,
    name: iconControl(),
  },
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<CfpbIconProps>;

export const Default: Story = {};

export const Spinning: Story = {
  args: { name: 'update', spin: true },
};

/**
 * There is no `color` attribute. The icon is a masked <span> whose background
 * is `currentcolor`. It is colored either by setting `--icon-color` on the element
 * or by setting `color` on the ancestor. Both stories below need a custom render
 * because `template()` only emits the CEM attributes and neither of these is one.
 */

export const Colors: Story = {
  render: (args) => html`
    <cfpb-icon name=${args.name ?? ''}></cfpb-icon>
    <cfpb-icon
      name=${args.name ?? ''}
      style="--icon-color: var(--gray)"
    ></cfpb-icon>
    <cfpb-icon
      name=${args.name ?? ''}
      style="--icon-color: var(--red)"
    ></cfpb-icon>
    <cfpb-icon
      name=${args.name ?? ''}
      style="--icon-color: var(--gold)"
    ></cfpb-icon>
    <cfpb-icon
      name=${args.name ?? ''}
      style="--icon-color: var(--green)"
    ></cfpb-icon>
  `,
};

export const InheritsColorFromParent: Story = {
  render: (args) => html`
    <span style="color: var(--pacific)">
      <cfpb-icon name=${args.name ?? ''}></cfpb-icon>
      Text and icon share one color.
    </span>
  `,
};
