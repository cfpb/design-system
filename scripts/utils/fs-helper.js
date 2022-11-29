import path from 'path';
import { createRequire } from 'module';

/**
 * Retrieve a reference path to a binary.
 *
 * @param {string} packageName - The name of the software package.
 * @param {string} [binaryName] - The name of the binary to retrieve.
 *   Same as the package name by default.
 * @param {string} [binaryDir] - The name of the binary directory to use.
 *   `bin` by default.
 * @returns {string} Path to the binary to run.
 */
function getBinary(packageName, binaryName, binaryDir) {
  const require = createRequire(import.meta.url);

  binaryName = binaryName || packageName;
  binaryDir = binaryDir || 'bin';
  const pkgPath = require.resolve(packageName);
  binaryDir = path.resolve(
    path.join(path.dirname(pkgPath), binaryDir, '/' + binaryName)
  );
  return binaryDir;
}

export default {
  getBinary: getBinary,
};
