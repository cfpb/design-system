import { setCustomElementsManifest } from '@storybook/web-components';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import customElements from '../storybook/custom-elements.json';
import './preview.scss';
import themeCFPB from './themeCFPB';

setCustomElementsManifest(customElements);
setStorybookHelpersConfig({ hideArgRef: true });

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
  },
};
