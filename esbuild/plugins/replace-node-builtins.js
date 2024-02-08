// See https://github.com/evanw/esbuild/issues/85#issuecomment-1086620079

import { createRequire } from 'node:module';

const replaceNodeBuiltIns = () => {
  const require = createRequire(import.meta.url);

  const replace = {
    path: require.resolve('path-browserify'),
  };
  const filter = RegExp(`^(${Object.keys(replace).join('|')})$`);
  return {
    name: 'replaceNodeBuiltIns',
    setup(build) {
      build.onResolve({ filter }, (arg) => ({
        path: replace[arg.path],
      }));
    },
  };
};

export { replaceNodeBuiltIns };
