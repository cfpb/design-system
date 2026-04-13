import { setCustomElementsManifest } from '@storybook/web-components';
import '../storybook/site.scss';
import customElementsManifest from './custom-elements.json';

setCustomElementsManifest(customElementsManifest);

const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      hideNoControlsWarning: true,
    },
    options: {
      showPanel: false,
      storySort: {
        method: 'alphabetical',
        order: ['Design system website', 'Web components', '*'],
      },
    },
  },
};

export default preview;
