// Script to find and replace custom-style BEM with getBEM syntax.

import * as fs from 'fs';
import { glob } from 'glob';

async function extractBEM() {
  let uniqueClasses = [];
  try {
    const rawData = await fs.readFileSync(
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

    // Parse out classes.
    const classes = [
      ...new Set(
        data.match(/(?:[\.]{1})([a-zA-Z_]+[\w-_]*)(?:[\s\.\,\{\>#\:]{0})/gim),
      ),
    ];

    classes.forEach((clazz) => {
      // Strip leading period.
      clazz = clazz.substring(1);

      // Build sets of the old and new BEM.
      const oldBEM = updateOldBEM(clazz);
      const newBEM = updateNewBEM(clazz);

      if (oldBEM !== newBEM) {
        uniqueClasses.push([oldBEM, newBEM]);
      }
    });
  } catch (err) {
    console.error(err);
  }

  return uniqueClasses;
}

function isBEM(clazz) {
  if (
    clazz.match(
      /^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/gim,
    ) !== null
  ) {
    return true;
  }

  return false;
}

function updateOldBEM(clazz) {
  if (isBEM(clazz)) {
    // BEM.
    clazz = clazz.replaceAll('__', '_');
    clazz = clazz.replaceAll('--', '__');
  }

  return clazz;
}

function updateNewBEM(clazz) {
  if (!isBEM(clazz)) {
    // Not BEM.
    clazz = clazz.replaceAll('__', '--');
    clazz = clazz.replaceAll('_', '__');
  }

  return clazz;
}

async function findAndReplaceBEM() {
  const filePaths = await glob('**/*.{md,html,js,less,css}', {
    ignore: ['CHANGELOG.md', 'node_modules/**', 'test/unit-test-coverage/**'],
  });

  const oldBEMList = await extractBEM();

  let file;
  let processedFile;
  filePaths.forEach(async (filePath) => {
    // A screenshot with a JS extention can be seen as a directory.
    if (!fs.lstatSync(filePath).isDirectory()) {
      file = await fs.readFileSync(filePath, 'utf8');
      processedFile = file;
      oldBEMList.forEach(async (clazz) => {
        const oldBEMClass = clazz[0];
        const newBEMClass = clazz[1];
        processedFile = processedFile.replaceAll(oldBEMClass, newBEMClass);
      });
      await fs.writeFileSync(filePath, processedFile, 'utf8');
    }
  });
}

findAndReplaceBEM();
