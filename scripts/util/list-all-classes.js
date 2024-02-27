// Generates a list of built class names from the DS file.

import * as fs from 'fs';

try {
  const rawData = fs.readFileSync(
    './packages/cfpb-design-system/dist/cfpb-design-system.css',
    'utf8',
  );

  // Strip comments.
  let data = rawData.replaceAll(/\/\*.*\*\//g, '');

  // Strip URLs.
  data = data.replaceAll(
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
    '',
  );

  const classes = data.match(
    /(?:[\.]{1})([a-zA-Z_]+[\w-_]*)(?:[\s\.\,\{\>#\:]{0})/gim,
  );

  let uniqueClasses = new Set();
  const bem = classes.filter((clazz) => {
    uniqueClasses.add(clazz);
    if (
      clazz.match(
        /^\.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/gim,
      ) === null
    ) {
      // Not BEM.
      console.log('\x1b[31m%s\x1b[0m', clazz);
    } else {
      // BEM.
    }

    return clazz;
  });

  // Convert to array and alphabetize.
  uniqueClasses = Array.from(uniqueClasses).sort();

  const file = fs.createWriteStream('css-classes.txt');
  file.on('error', function (err) {
    /* error handling */
  });
  uniqueClasses.forEach(function (v) {
    file.write(v + '\n');
  });
  file.end();
} catch (err) {
  console.error(err);
}
