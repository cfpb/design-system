import fs from 'fs';
const { mkdir, rename } = fs.promises;
import { dirname, resolve } from 'path';
import { getFiles } from '../utils.js';

/**
 * Copy dist files from temporary directory to packages directories.
 */
async function copy() {
  const resolvedBase = resolve('tmp');
  const tmpFiles = await getFiles(resolvedBase);
  const pathMap = {
    '/tmp/': '/packages/',
    '/src/': '/dist/',
  };
  const newFiles = tmpFiles.map((file) => {
    return file.replace(new RegExp(/\/tmp\/|\/src\//gi), (match) => {
      return pathMap[match];
    });
  });

  for (let i = 0, len = tmpFiles.length; i < len; i++) {
    const newFile = newFiles[i];
    await mkdir(dirname(newFile), { recursive: true });
    await rename(tmpFiles[i], newFile);
  }

  fs.rmSync(`./tmp/`, { recursive: true });
}

export { copy };
