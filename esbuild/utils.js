import { promises } from 'fs';
const { readdir } = promises;
import { resolve } from 'path';

// Files that should not be copied and directories that should not be walked
const blocklist = [
  'node_modules',
  '.yarn',
  '.yarnrc',
  'yarn.lock',
  'package.json',
  '.gitkeep',
  'root',
];

/**
 * @param {string} dir - Current directory to walk.
 * @returns {Array} The list of filtered files from the `dir` directory.
 */
async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      if (blocklist.indexOf(dirent.name) > -1) return '';
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    }),
  );
  return files.flat().filter((v) => v);
}

export { getFiles };
