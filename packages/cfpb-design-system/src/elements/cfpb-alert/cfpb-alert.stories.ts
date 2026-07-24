/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect } from 'storybook/test';
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

const { args, argTypes, template } = getStorybookHelpers<CfpbAlertProps>(
  'cfpb-alert',
  { excludeCategories: ['methods'] },
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
    'default-slot': 'You can also add an explanation to the alert.',
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
            <p>This is the explanation of the alert.</p>
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

/*
 * Stories below here are behavior tests
 */

export const RenderMessageAndExplanation: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const alert = canvasElement.querySelector('cfpb-alert') as CfpbAlert;
    await alert.updateComplete;

    const message = alert.shadowRoot!.querySelector('.message')!;
    await expect(message.textContent!.trim()).toBe('Information alert');

    const slot = alert.shadowRoot!.querySelector(
      '.explanation slot',
    ) as HTMLSlotElement;
    const explanation = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent)
      .join('')
      .trim();
    await expect(explanation).toBe(
      'You can also add an explanation to the alert.',
    );
  },
};

export const HasAlertRole: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const alert = canvasElement.querySelector('cfpb-alert') as CfpbAlert;
    await alert.updateComplete;

    const container = alert.shadowRoot!.querySelector('.container')!;
    await expect(container.getAttribute('role')).toBe('alert');
  },
};

export const StatusIcons: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const alert = canvasElement.querySelector('cfpb-alert') as CfpbAlert;

    for (const [status, iconName] of Object.entries(statusIcons)) {
      alert.status = status;
      await alert.updateComplete;

      const icon = alert.shadowRoot!.querySelector('cfpb-icon')!;
      await expect(icon.getAttribute('name')).toBe(iconName);

      await expect(icon.hasAttribute('spin')).toBe(status === 'loading');
    }
  },
};

export const InvalidStatus: Story = {
  tags: ['!dev', '!autodocs'],
  args: { status: 'not-a-status' as CfpbAlertProps['status'] },
  play: async ({ canvasElement }) => {
    const alert = canvasElement.querySelector('cfpb-alert') as CfpbAlert;
    await alert.updateComplete;

    const icon = alert.shadowRoot!.querySelector('cfpb-icon')!;
    await expect(icon.getAttribute('name')).toBe(statusIcons.info);

    await expect(icon.hasAttribute('spin')).toBe(false);
  },
};

export const MessageUpdatesProgrammatically: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const alert = canvasElement.querySelector('cfpb-alert') as CfpbAlert;
    alert.message = 'Updated message';
    await alert.updateComplete;

    const message = alert.shadowRoot!.querySelector('.message')!;
    await expect(message.textContent!.trim()).toBe('Updated message');
  },
};
