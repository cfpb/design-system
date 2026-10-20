/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import { keyed } from 'lit/directives/keyed.js';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { CfpbLinkProps } from '../../../../../storybook/custom-elements-types';
import { CfpbLink } from './index.js';

CfpbLink.init();

const { args, argTypes, template } = getStorybookHelpers<CfpbLinkProps>(
  'cfpb-link',
  { excludeCategories: ['methods', 'properties'] },
);

type LinkStoryArgs = CfpbLinkProps & { 'default-slot'?: string };

/**
 * cfpb-link is a slotted `<a>` so link text should go in it. UI control is only text.
 * @param {LinkStoryArgs} args - Story args
 * @returns {TemplateResult} The actual link
 */
const makeLink = ({ 'default-slot': text, ...args }: LinkStoryArgs) =>
  html`${keyed(text, template(args, html`<a href="#">${text}</a>`))}`;

const meta: Meta<LinkStoryArgs> = {
  title: 'Web Components/cfpb-link',
  component: 'cfpb-link',
  tags: ['autodocs'],
  args: {
    ...args,
    'default-slot': 'Learn more about mortgages',
  },
  argTypes,
  render: (args) => makeLink(args),
};

export default meta;

type Story = StoryObj<LinkStoryArgs>;

export const Default: Story = {};

export const External: Story = {
  args: {
    'link-variant': 'external',
    'default-slot': 'Visit an external site',
  },
};

export const Download: Story = {
  args: {
    'link-variant': 'download',
    'default-slot': 'Download the report',
  },
};

export const NavRight: Story = {
  args: {
    'link-variant': 'nav-right',
    'default-slot': 'Next page',
  },
};

export const NavLeft: Story = {
  args: {
    'link-variant': 'nav-left',
    'default-slot': 'Previous page',
  },
};

export const InLine: Story = {
  args: {
    inline: true,
    'default-slot': 'an inline link',
  },
  render: (args) => html`
    <p>
      Body copy that runs on for a while and contains ${makeLink(args)} in the
      middle of a sentence.
    </p>
  `,
};

// `size=h4` sets the link at h4. `color-theme="dark"` makes the link color black
export const HeadingSized: Story = {
  args: {
    size: 'h4',
    'color-theme': 'dark',
    'no-underline': true,
    'default-slot': 'Paying for college',
  },
};

// Adjacent links use top border. Below tablet break points each one stacks. In a cfpb-list the list drops
// the top border of every link except the first.
export const AdjacentLinks: Story = {
  render: () => html`
    <cfpb-link><a href="#">Mortgages</a></cfpb-link>
    <cfpb-link><a href="#">Credit cards</a></cfpb-link>
    <cfpb-link><a href="#">Student loads</a></cfpb-link>
  `,
};

// Set by hand on the first link of a stack where there is no other links
export const NoTopBorder: Story = {
  args: {
    'no-top-border': true,
    'default-slot': 'Mortgages',
  },
};
