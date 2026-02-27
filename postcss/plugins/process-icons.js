import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const stripQuotes = (str) => str.replace(/['"]+/g, '');

export function processIcons() {
  return {
    postcssPlugin: 'process-icons',

    Declaration: {
      '--cfpb-background-icon-svg': (decl) => {
        const props = decl.value.split(' ');
        const iconName = stripQuotes(props[0]);
        const iconColor = props.length > 1 ? stripQuotes(props[1]) : '';

        const svgPath = join(
          __dirname,
          '../../packages/cfpb-design-system/src/components/cfpb-icons/icons',
          `${iconName}.svg`,
        );

        let rawSVG = readFileSync(svgPath, 'utf8');

        if (iconColor) {
          rawSVG = rawSVG.replace(
            /class="cf-icon-svg .+?"\s*/,
            `fill="${iconColor}" `,
          );
        }

        const encodedSVG = encodeURIComponent(rawSVG)
          .replace(/%0A/g, '')
          .replace(/%20/g, ' ');

        decl.replaceWith({
          prop: 'background-image',
          value: `url("data:image/svg+xml;charset=UTF-8,${encodedSVG}")`,
        });
      },
    },
  };
}

processIcons.postcss = true;
