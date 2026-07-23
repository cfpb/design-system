/// <reference types="vite/client" />
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { fn, userEvent, expect } from 'storybook/test';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { CfpbExpandableProps } from '../../../../../storybook/custom-elements-types.d.ts';
import { CfpbExpandable } from './index.js';

CfpbExpandable.init();

const { args, argTypes } = getStorybookHelpers<CfpbExpandableProps>(
  'cfpb-expandable',
  { excludeCategories: ['methods'] },
);

type ExpandableStoryArgs = CfpbExpandableProps & {
  'header-slot'?: string;
  'content-slot'?: string;
};

const meta: Meta<ExpandableStoryArgs> = {
  title: 'Web Components/cfpb-expandable',
  component: 'cfpb-expandable',
  tags: ['autodocs'],
  args: {
    ...args,
    'header-slot': 'Section header',
    'content-slot': 'Expandable section content',
  },
  argTypes,
  render: ({ open, 'header-slot': header, 'content-slot': content }) =>
    html`<cfpb-expandable ?open="${open}">
      <span slot="header">${header}</span>
      <p slot="content">${content}</p>
    </cfpb-expandable>`,
};

export default meta;

type Story = StoryObj<ExpandableStoryArgs>;

export const Default: Story = {
  args: { open: false },
};

export const ExpandBegin: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('expandbegin', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    await userEvent.click(button);

    await expect(spy).toHaveBeenCalledOnce();
  },
};

export const Expanded: Story = {
  args: { open: true },
};

export const CollapseOnClick: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('collapseend', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;
    await userEvent.click(button);

    // BaseTransition registers on 'webketTransitionEnd' in Chromium (first match
    // in its prefix map), so the synthetic event must use that name (not transitioned)
    content.dispatchEvent(
      new TransitionEvent('webkitTransitionEnd', {
        propertyName: 'max-height',
      }),
    );

    await expect(spy).toHaveBeenCalledOnce();
  },
};

export const CollapseProgrammatically: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const button = expandable.shadowRoot!.querySelector('button')!;
    expandable.isExpanded = false;
    await expandable.updateComplete;

    await expect(expandable.isExpanded).toBe(false);
    await expect(button.getAttribute('aria-expanded')).toBe('false');
  },
};

export const ExpandEnd: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('expandend', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    const content = expandable.shadowRoot!.querySelector(
      '.o-expandable__content',
    )!;
    await userEvent.click(button);

    content.dispatchEvent(
      new TransitionEvent('webkitTransitionEnd', {
        propertyName: 'max-height',
      }),
    );

    await expect(spy).toHaveBeenCalledOnce();
  },
};

export const CollapseBegin: Story = {
  tags: ['!dev', '!autodocs'],
  args: { open: true },
  play: async ({ canvasElement }) => {
    const expandable = canvasElement.querySelector(
      'cfpb-expandable',
    ) as CfpbExpandable;
    const spy = fn();
    expandable.addEventListener('collapsebegin', spy);

    const button = expandable.shadowRoot!.querySelector('button')!;
    await userEvent.click(button);

    await expect(spy).toHaveBeenCalledOnce();
  },
};
