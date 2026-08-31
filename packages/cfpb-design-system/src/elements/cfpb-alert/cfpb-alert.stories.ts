/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbAlertProps } from '../../../../../storybook/custom-elements-types';
import { CfpbAlert } from './index.js';
import { CfpbLink } from '../cfpb-link/index.js';
import { CfpbList } from '../cfpb-list/index.js';

CfpbAlert.init();
// Alerts can slot a list of links below the explanation
CfpbLink.init();
CfpbList.init();

// The icon each status renders, per the component's icon getter
const statusIcons = {
  info: 'warning-round',
  warning: 'warning-round',
  success: 'approved-round',
  error: 'error-round',
  loading: 'update',
};

// See cfpb-button.stories.ts for why properties is excluded
const { args, argTypes, template } = getStorybookHelpers<CfpbAlertProps>(
  'cfpb-alert',
  { excludeCategories: ['methods', 'properties'] },
);

type AlertStoryArgs = CfpbAlertProps & { 'default-slot'?: string };

const meta: Meta<AlertStoryArgs> = {
  title: 'Web Components/cfpb-alert',
  component: 'cfpb-alert',
  tags: ['autodocs'],
  args: {
    ...args,
    status: 'info',
    message: 'Information alert',
    /**
     * The explanation is wrapped in an element rather than slotted as text
     * so the alert's `::slotted()` spacing applies to it. Text is not matched
     * by `::slotted()`. A span is used instead of a `<p>` because slotted
     * content stays in the light DOM. In the light DOM the global `<p> { margin: 0 0 15px }`
     * in base.scss wins over slotted content. This matches the examples on the Docs page.
     */
    'default-slot':
      '<span>You can also add an explanation to the alert.</span>',
  },
  argTypes: {
    ...argTypes,
    status: {
      control: 'select',
      options: Object.keys(statusIcons),
    },
  },
  render: (args) => template(args),
};

export default meta;

type Story = StoryObj<AlertStoryArgs>;

export const Information: Story = {};

export const MessageOnly: Story = {
  args: {
    message: 'Message only',
    'default-slot': '',
  },
};

export const WithLinks: Story = {
  args: {
    'default-slot': `
            <span>This is the explanation of the alert.</span>
            <cfpb-list gap="compact">
                <cfpb-link link-variant="nav-right">
                    <a href="#">This is a link below the explanation</a>
                </cfpb-link>
                <cfpb-link link-variant="external">
                    <a href="#">This is an external link</a>
                </cfpb-link>
            </cfpb-list>
        `,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    message: '11 results',
    'default-slot':
      '<span>This is an optional explanation of the success message.</span>',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    message: 'No results found',
    'default-slot':
      '<span>This is an optional explanation of the warning.</span>',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    message: 'There was a problem with your submission',
    'default-slot':
      '<span>This is an optional explanation of the error.</span>',
  },
};

export const Loading: Story = {
  args: {
    status: 'loading',
    message: 'Loading results',
    'default-slot':
      '<span>This is an optional explanation of the loading state.</span>',
  },
};

/*
 * Behavior is covered in index.spec.js - see STORYBOOK.md for the split.
 */
