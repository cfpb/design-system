/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing, type TemplateResult } from 'lit';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbAlertProps } from '../../../../../storybook/custom-elements-types';
import { CfpbAlert } from './index.js';
import { CfpbLink } from '../cfpb-link/index.js';
import { CfpbList } from '../cfpb-list/index.js';

CfpbAlert.init();
// Alerts can slot a list of links below the explanation
CfpbLink.init();
CfpbList.init();

// The icon each status renders
const statusIcons = {
  info: 'warning-round',
  warning: 'warning-round',
  success: 'approved-round',
  error: 'error-round',
  loading: 'update',
};

const { args, argTypes, template } = getStorybookHelpers<CfpbAlertProps>(
  'cfpb-alert',
  { excludeCategories: ['methods', 'properties'] },
);

type AlertStoryArgs = CfpbAlertProps & { 'default-slot'?: string };

/**
 * Explanation is in a `<span>`. Slot content stays in the light DOM
 * and the control only has text in Storybook.
 * @param {AlertStoryArgs} args - The alert story args.
 * @param {TemplateResult} [extra] - Slotted markup after the explanation
 * @returns {TemplateResult} The alert.
 */
const renderAlert = (
  { 'default-slot': explanation, ...args }: AlertStoryArgs,
  extra?: TemplateResult,
) =>
  template(
    args,
    html`${explanation ? html`<span>${explanation}</span>` : nothing}${extra}`,
  );

const meta: Meta<AlertStoryArgs> = {
  title: 'Web Components/cfpb-alert',
  component: 'cfpb-alert',
  tags: ['autodocs'],
  args: {
    ...args,
    status: 'info',
    message: 'Information alert',
    /**
     * A span is used instead of a `<p>` because slotted
     * content stays in the light DOM. This matches the examples on the Docs page.
     */
    'default-slot': 'You can also add an explanation to the alert.',
  },
  argTypes: {
    ...argTypes,
    status: {
      control: 'select',
      options: Object.keys(statusIcons),
    },
  },
  render: (args) => renderAlert(args),
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
    'default-slot': 'This is the explanation of the alert.',
  },
  render: (args) =>
    renderAlert(
      args,
      html`<cfpb-list gap="compact">
        <cfpb-link link-variant="nav-right">
          <a href="#"> This is a link below the explanation</a>
        </cfpb-link>
        <cfpb-link link-variant="external">
          <a href="#"> This is an external link</a>
        </cfpb-link>
      </cfpb-list> `,
    ),
};

export const Success: Story = {
  args: {
    status: 'success',
    message: '11 results',
    'default-slot': 'This is an optional explanation of the success message.',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    message: 'No results found',
    'default-slot': 'This is an optional explanation of the warning.',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    message: 'There was a problem with your submission',
    'default-slot': 'This is an optional explanation of the error.',
  },
};

export const Loading: Story = {
  args: {
    status: 'loading',
    message: 'Loading results',
    'default-slot': 'This is an optional explanation of the loading state.',
  },
};
