import { addons } from 'storybook/manager-api';
import '@cfpb/cfpb-design-system/src/base/custom-props.css';
import '@fontsource-variable/source-sans-3';
import './manager-font.css';
import themeCFPB from './themeCFPB';

addons.setConfig({
  theme: themeCFPB,
});
