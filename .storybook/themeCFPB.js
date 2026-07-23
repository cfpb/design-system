import { create } from 'storybook/theming/create';
import CfpbLogo from '../docs/assets/img/cfpb-logo.png';

const token = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default create({
  base: 'light',

  brandTitle: 'CFPB Design System',
  brandImage: CfpbLogo,
  brandURL: 'https://cfpb.github.io/design-system/web-components/',
  brandTarget: '_blank',

  fontBase: token('--font-stack-branded'),

  // App
  appBorderColor: token('--gray'),
  appContentBg: token('--white'),

  // Sidebar
  appBg: token('--white'),
  textColor: token('--black'),
  textMutedColor: token('--black'),

  // Toolbars
  colorSecondary: token('--teal'),
  barTextColor: token('--gray-40'),
  barSelectedColor: token('--teal'),
  barBg: token('--gray-10'),

  // Form colors
  buttonBg: token('--gray-10'),
  buttonBorder: token('--gray-40'),
  booleanBg: token('--gray-10'),
  booleanSelectedBg: token('--teal-80'),
  inputBg: token('--white'),
  inputBorder: token('--gray'),
  inputTextColor: token('--black'),
});
