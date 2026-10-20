import { setCustomElementsManifest } from '@storybook/web-components';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import customElements from '../storybook/custom-elements.json';
import './preview.scss';
import themeCFPB from './themeCFPB';

setCustomElementsManifest(customElements);
setStorybookHelpersConfig({ hideArgRef: true });

/**
 * We want bool attributes to show up correctly in the show code examples
 * (EG `disabled` not as `disabled=true`).
 * @param {string} code - The rendered HTML.
 * @param {object} context - The story context.
 * @param {object} context.argTypes - The story argTypes.
 * @returns {string} The bare boolean attr
 */
function plainBooleanAttr(code, { argTypes }) {
  const booleans = new Set(
    Object.keys(argTypes).filter(
      (name) => argTypes[name].type?.name === 'boolean',
    ),
  );

  return code.replace(/<[^>]+>/g, (tag) =>
    tag.replace(/(\s([^\s=/>]+))="(true)?"/g, (attr, bare, name, isTrue) =>
      isTrue && !booleans.has(name) ? attr : bare,
    ),
  );
}

export const parameters = {
  controls: {
    expand: true,
    disableSaveFromUI: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: themeCFPB,
    source: {
      transform: plainBooleanAttr,
    },
  },

  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: 'todo',
  },
};
