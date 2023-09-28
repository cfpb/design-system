import { test, expect } from '@playwright/test';

test.describe('Netlify CMS', () => {
  const WAIT_FOR_DISPLAY_TIMEOUT = 60000;

  test.describe('Editing the homepage', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(
        '/design-system/admin/#/collections/special-pages/entries/home'
      );
      //await browser.pause(300);
      const loginButton = await page.getByRole('button', { name: /Login/i });
      // Wait for page to load netlify configuration and show the login button.
      await expect(loginButton).toBeVisible();
      await loginButton.click();
    });

    test('should allow the user to log in', async ({ page }) => {
      const editorContainer = await page.locator('text=Page title');
      // Wait for page to load netlify editor.
      await expect(editorContainer).toBeVisible({
        timeout: WAIT_FOR_DISPLAY_TIMEOUT,
      });
    });

    test('should properly render a preview of a page', async ({ page }) => {
      // The homepage's body field
      const pageBodyField = await page.locator('#nc-root #description-field-2');
      await expect(pageBodyField).toBeVisible({
        timeout: WAIT_FOR_DISPLAY_TIMEOUT,
      });
      await pageBodyField.fill('');
      await page.keyboard.press('Meta+A');
      await page.keyboard.press('Backspace');
      await pageBodyField.type('fun');
      // The preview pane is an iframe
      const previewPane = await page
        .frameLocator('iframe#preview-pane')
        .locator('body');
      await expect(previewPane).toContainText('fun');
    });
  });

  test.describe('Editing a component page', () => {
    test.beforeEach(async ({ page }) => {
      await page.reload();
      await page.goto(
        '/design-system/admin/#/collections/pages/entries/buttons'
      );
      // Make the browser a little wider than normal to prevent the "show details" tabs
      // from triggering their mobile media queries
      await page.setViewportSize({ width: 1850, height: 800 });
      const loginButton = await page.getByRole('button', { name: /Login/i });
      // Wait for page to load netlify configuration and show the login button.
      await expect(loginButton).toBeVisible();
      await loginButton.click();
    });

    test('should properly render a preview of a component page', async ({
      page,
    }) => {
      // The button page's title field
      const pageTitleField = await page.locator('#nc-root #title-field-1');
      await expect(pageTitleField).toBeVisible({
        timeout: WAIT_FOR_DISPLAY_TIMEOUT,
      });
      await pageTitleField.fill('');
      await pageTitleField.type('best');
      // The preview pane is an iframe
      const previewPane = await page
        .frameLocator('iframe#preview-pane')
        .locator('body');
      await expect(previewPane).toContainText('best');
    });

    test('should support switching between the various "show details" tabs', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 2000, height: 2000 });
      // Wait for the editor to load
      const editorContainer = await page.locator('text=Page title');
      await expect(editorContainer).toBeVisible({
        timeout: WAIT_FOR_DISPLAY_TIMEOUT,
      });
      // The preview pane is an iframe
      const detailsButton = await page
        .frameLocator('iframe#preview-pane')
        .getByRole('button', { name: 'Show details' })
        .first();
      //const detailsButton = await page.locator('button=Show details');
      await detailsButton.click();
      //const implementationButton = await page.getByRole('link', {
      //  name: 'Implementation',
      //});
      const implementationButton = await page
        .frameLocator('iframe#preview-pane')
        .getByRole('link', { name: 'Implementation' })
        .first();
      await implementationButton.click();
      // Move one level up the DOM tree
      const implementationButtonParent = await page
        .frameLocator('iframe#preview-pane')
        .locator('li.m-tabs_list-item-selected')
        .first();
      await expect(implementationButtonParent).toContainText('Implementation');
    });
  });
});
