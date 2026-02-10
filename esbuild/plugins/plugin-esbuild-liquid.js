import fs from 'fs';
import path from 'path';

const pluginEsbuildLiquid = {
  name: 'liquid',
  setup(build) {
    build.sideEffects = false;

    build.onResolve({ filter: /.*\.html$/ }, (args) => {
      return {
        path: `${args.resolveDir}/${args.path}`,
        namespace: 'liquid',
      };
    });

    build.onResolve({ filter: /^cfpb-icons$/ }, () => {
      return {
        path: 'cfpb-icons',
        namespace: 'icons-map',
      };
    });

    build.onLoad({ filter: /.*/, namespace: 'icons-map' }, () => {
      const iconsDir = path.resolve(process.cwd(), 'docs/_includes/icons');
      const files = fs.existsSync(iconsDir) ? fs.readdirSync(iconsDir) : [];
      const icons = {};

      for (const file of files) {
        if (!file.endsWith('.svg')) continue;
        const iconPath = path.join(iconsDir, file);
        icons[file] = fs
          .readFileSync(iconPath, { encoding: 'utf8', flag: 'r' })
          .trim();
      }

      return {
        contents: `export default ${JSON.stringify(icons)};`,
        loader: 'js',
      };
    });

    build.onLoad({ filter: /.*\.html$/, namespace: 'liquid' }, async (args) => {
      let contents = fs
        .readFileSync(args.path, { encoding: 'utf8', flag: 'r' })
        .trim();

      const iconsDir = path.resolve(process.cwd(), 'docs/_includes/icons');
      contents = contents.replace(
        /{%\s+include\s+\/?icons\/([\w-]+)\.svg\s+%}/g,
        (match, icon) => {
          const iconPath = path.join(iconsDir, `${icon}.svg`);
          if (!fs.existsSync(iconPath)) return match;
          return fs
            .readFileSync(iconPath, { encoding: 'utf8', flag: 'r' })
            .trim();
        },
      );

      if (build.initialOptions && build.initialOptions.minify) {
        contents = contents
          .replace(/>[\r\n ]+</g, '><')
          .replace(/(<.*?>)|\s+/g, (m, $1) => ($1 ? $1 : ' '))
          .replace(/(-%} \{%-)/, '-%}{%-')
          .trim();
      }

      return {
        contents: JSON.stringify(contents),
        loader: 'json',
        watchFiles: [args.path],
      };
    });
  },
};

export { pluginEsbuildLiquid };
