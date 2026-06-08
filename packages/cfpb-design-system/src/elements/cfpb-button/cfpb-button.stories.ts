/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbButtonProps } from '../../../../../storybook/custom-elements-types';
import { CfpbButton } from './index.js';

CfpbButton.init();

// Build the icon name list from the SVG filenames
const iconNames = Object.keys(
  import.meta.glob('../../components/cfpb-icons/icons/*.svg'),
).map((p) => p.split('/').pop()!.replace('.svg', ''));

const { args, argTypes, template } = getStorybookHelpers<CfpbButtonProps>(
  'cfpb-button',
  { excludeCategories: ['methods'] },
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
    iconLeft: {
      control: 'select',
      options: ['', ...iconNames],
    },
    iconRight: {
      control: 'select',
      options: ['', ...iconNames],
    },
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
    iconRight: 'download',
  },
};

export const WithSpinningIcon: Story = {
  args: {
    iconLeft: 'updating',
    iconleftspin: true,
  },
};

export const DisabledAsLink: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    href: '#',
    disabled: true,
  },
};

export const InvalidVariant: Story = {
  tags: ['!dev', '!autodocs'],
  args: { variant: 'not-a-variant' as CfpbButtonProps['variant'] },
};

export const InvalidType: Story = {
  tags: ['!dev', '!autodocs'],
  args: { type: 'not-a-type' as CfpbButtonProps['type'] },
};
