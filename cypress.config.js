import { defineConfig } from 'cypress';
import fs from 'fs/promises';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

export default defineConfig({
  projectId: '2hroh3',
  e2e: {
    baseUrl: 'http://127.0.0.1:4000/design-system/',
    defaultCommandTimeout: 40000,
    specPattern: 'test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'test/cypress/support/e2e.js',
    excludeSpecPattern: 'test/cypress/e2e/**/*-helpers.cy.js',
    setupNodeEvents(on) {
      on('task', {
        async readTextFile(filePath) {
          return fs.readFile(filePath, 'utf8');
        },
        async writeTextFile({ filePath, content }) {
          await fs.writeFile(filePath, content, 'utf8');
          return null;
        },
        async replaceTextInFile({ filePath, from, to }) {
          const content = await fs.readFile(filePath, 'utf8');

          if (!content.includes(from)) {
            throw new Error(`Expected to find text in ${filePath}`);
          }

          await fs.writeFile(filePath, content.replace(from, to), 'utf8');
          return null;
        },
        async compareScreenshots({
          referencePath,
          candidatePath,
          diffPath,
          threshold = 0.02,
        }) {
          const [referenceBuffer, candidateBuffer] = await Promise.all([
            fs.readFile(referencePath),
            fs.readFile(candidatePath),
          ]);

          const referenceImage = PNG.sync.read(referenceBuffer);
          const candidateImage = PNG.sync.read(candidateBuffer);

          if (
            referenceImage.width !== candidateImage.width ||
            referenceImage.height !== candidateImage.height
          ) {
            throw new Error('Screenshot dimensions do not match.');
          }

          const diffImage = new PNG({
            width: referenceImage.width,
            height: referenceImage.height,
          });
          const diffPixels = pixelmatch(
            referenceImage.data,
            candidateImage.data,
            diffImage.data,
            referenceImage.width,
            referenceImage.height,
            {
              threshold: 0.1,
            },
          );
          const ratio =
            diffPixels / (referenceImage.width * referenceImage.height);

          await fs.writeFile(diffPath, PNG.sync.write(diffImage));

          return {
            diffPixels,
            ratio,
            passes: ratio <= threshold,
          };
        },
      });
    },
  },
});
