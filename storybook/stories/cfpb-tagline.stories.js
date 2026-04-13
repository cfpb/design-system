import { html } from 'lit';
import { CfpbTagline } from '../../packages/cfpb-design-system/src/elements/';

CfpbTagline.init();

/**
 * Render a cfpb-tagline story variant
 * @param {( isLarge: boolean, text: string )} args - Story args for the element
 * @returns {import ('lit').TemplateResult} Lit template
 */
function renderTagline(args) {
  const { isLarge, text } = args;

  return text
    ? html`<cfpb-tagline .isLarge=${isLarge}>${text}</cfpb-tagline>`
    : html`<cfpb-tagline .isLarge=${isLarge}></cfpb-tagline>`;
}

export default {
  title: 'Web Components/cfpb-tagline',
  component: 'cfpb-tagline',
  render: renderTagline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Official U.S. government website tagline. Source: https://cfpb.github.io/design-system/components/taglines',
      },
    },
  },
  args: {
    isLarge: false,
    text: '',
  },
  argTypes: {
    isLarge: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
  },
};

export const Standard = {};

export const Large = {
  args: {
    isLarge: true,
  },
};

export const CustomText = {
  args: {
    text: 'USA',
  },
};
