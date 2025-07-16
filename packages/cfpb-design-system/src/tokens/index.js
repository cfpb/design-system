import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dirs = (p) => {
  const files = readdirSync(p);
  const filterFiles = files.filter((f) => {
    const isVisibleDir =
      statSync(join(p, f)).isDirectory() && !f.startsWith('.');
    return isVisibleDir;
  });
  return filterFiles;
};

export default dirs('./packages/cfpb-design-system/src/tokens/');
