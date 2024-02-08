import fs from 'node:fs';

const esbuildLiquidPlugin = () => {
  return {
    name: 'liquid',
    setup(build) {
      build.sideEffects = false;

      build.onResolve({ filter: /.*\.liquid$/ }, (args) => {
        return {
          path: `${args.resolveDir}/${args.path}`,
          namespace: 'liquid',
        };
      });

      build.onLoad(
        { filter: /.*\.liquid$/, namespace: 'liquid' },
        async (args) => {
          let contents = fs
            .readFileSync(args.path, { encoding: 'utf8', flag: 'r' })
            .trim();

          if (build.initialOptions && build.initialOptions.minify) {
            contents = contents
              .replace(/\>[\r\n ]+\</g, '><')
              .replace(/(<.*?>)|\s+/g, (m, $1) => ($1 ? $1 : ' '))
              .replace(/(-%} \{%-)/, '-%}{%-')
              .trim();
          }

          return {
            contents: JSON.stringify(contents),
            loader: 'json',
            watchFiles: [args.path],
          };
        },
      );
    },
  };
};

export { esbuildLiquidPlugin };
