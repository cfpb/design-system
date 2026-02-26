import { processIcons } from './postcss/plugins/process-icons.js';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [processIcons(), autoprefixer()],
};
