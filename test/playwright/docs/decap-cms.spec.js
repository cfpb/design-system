import { test, expect } from '@playwright/test';

const PAGE_LOAD_DELAY = 120_000;

/**
 * Load up the CMS at a particular path.
 * @param {object} page - The playwright page object.
 * @param {string} path - A URL path.
 */
async function setupCmsVisit(page, path) {
  await page.reload();
  await page.goto(path);
  await expect(page.locator('button').getByText(/Login/).first()).toBeVisible({
    timeout: PAGE_LOAD_DELAY,
  });
  await page.locator('button').getByText(/Login/).first().click();
  await expect(
    page
      .locator('div')
      .getByText(/Loading entry\.\.\./)
      .first(),
  ).toBeVisible();
  await expect(
    page
      .locator('label')
      .getByText(/Page title/)
      .first(),
  ).toBeVisible({ timeout: PAGE_LOAD_DELAY });
}

test.describe('Decap CMS', () => {
  test.describe('Editing the homepage', () => {
    test.beforeEach(async ({ page }) => {
      setupCmsVisit(page, 'admin/#/collections/special-pages/entries/home');
    });

    test('should properly render a preview of a page', async ({ page }) => {
      await expect(
        page
          .locator('label')
          .getByText(/Page title/)
          .first(),
      ).toBeVisible({ timeout: PAGE_LOAD_DELAY });
      // The homepage's body field
      await expect(
        page.locator('#nc-root #description-field-2').first(),
      ).toBeVisible();
      await page.locator('#nc-root #description-field-2').clear();
      await page
        .locator('#nc-root #description-field-2')
        .pressSequentially('fun', {
          delay: 0,
        });
      await page.locator('#nc-root #description-field-2').blur();
      await expect(
        page.frameLocator('#preview-pane').locator('.frame-content'),
      ).toContainText('fun');
    });
  });

  test.describe('Editing a component page', () => {
    test.beforeEach(async ({ page }) => {
      setupCmsVisit(page, 'admin/#/collections/pages/entries/buttons');
    });

    test('should properly render a preview of a component page', async ({
      page,
    }) => {
      // The button page's title field
      await expect(page.locator('#nc-root #title-field-1')).toBeVisible({
        timeout: PAGE_LOAD_DELAY,
      });
      await page.locator('#nc-root #title-field-1').clear();
      await page.locator('#nc-root #title-field-1').fill('😄');
      await expect(page.locator('#nc-root #title-field-1')).toHaveValue('😄');
      await page.locator('#nc-root #title-field-1').blur();
      await expect(
        page.frameLocator('#preview-pane').locator('.frame-content'),
      ).toContainText('😄');
    });

    test('should support switching between the various "SHOW DETAILS" tabs', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 2000, height: 1200 });
      // Wait for the editor to load
      await expect(
        page
          .locator('label')
          .getByText(/Page title/)
          .first(),
      ).toBeVisible({ timeout: PAGE_LOAD_DELAY });

      const frame = page.frameLocator('#preview-pane');
      await expect(
        frame
          .locator('cfpb-button')
          .filter({ hasText: 'SHOW DETAILS' })
          .first(),
      ).toBeVisible();

      await expect(frame.locator('.m-tabs').first()).toHaveCSS(
        'display',
        'none',
      );

      await frame
        .locator('cfpb-button')
        .filter({ hasText: 'SHOW DETAILS' })
        .first()
        .click();

      await expect(
        frame.locator('a').filter({ hasText: 'Implementation' }).first(),
      ).toBeVisible();

      await frame
        .locator('a')
        .filter({ hasText: 'Implementation' })
        .first()
        .click();

      await expect(frame.locator('.m-tabs').first()).not.toHaveCSS(
        'display',
        'none',
      );

      const child = frame
        .locator('a')
        .filter({ hasText: 'Implementation' })
        .first();

      const parent = child.locator('..');
      await expect(parent).toContainClass('m-tabs__list-item-selected');
    });
  });
});
