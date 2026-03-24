import { compile } from 'sass';
import { writeFileSync } from 'node:fs';
import { globSync } from 'glob';

const files = globSync('./packages/cfpb-design-system/src/**/*.component.scss');

for (const file of files) {
  // Only compile entry files (skip partials starting with "_").
  if (file.includes('/_')) continue;

  const result = compile(file, {
    loadPaths: ['packages', 'node_modules'],
  });
  const safeCss = result.css.replace(/`/g, '\\`');

  const outFile = file.replace('.scss', '.js');

  const js = `
import { css } from 'lit';
export default css\`${safeCss}\`;
`;

  writeFileSync(outFile, js);

  // Uncomment console.log below to output files generated from .scss files.
  // eslint-disable-next-line no-console
  // console.log('✅', outFile);
}
