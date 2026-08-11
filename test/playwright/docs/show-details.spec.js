import { test, expect } from '@playwright/test';

test.describe('The "SHOW DETAILS" toggling feature', () => {
  const components = [
    'alerts',
    'banner-notification',
    'banner-us-gov',
    'buttons',
    'checkboxes',
    'date-picker',
    'expandables',
    'fieldsets',
    'helper-text',
    'labels-and-legends',
    'links',
    'lists',
    'pagination',
    'radio-buttons',
    'selects',
    'summaries',
    'tables',
    'taglines',
    'text-inputs',
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto('components/');
    await page.setViewportSize({ width: 1600, height: 1200 });
    // Sidenav.
    await expect(page.locator('.ds-nav').first()).toBeVisible();
    // If tests are being run via Sauce Labs, only test ten random component pages.
    // Testing all of them takes 30+ minutes and Sauce Labs has a max test length of 30 min.
    /*if (global.SAUCE_LABS) {
          componentPages.sort(() => 0.5 - Math.random());
          componentPages = componentPages.slice(0, 10);
        }*/
  });

  test('should query component names', async ({ page }) => {
    const items = page.locator('.ds-nav-2 .a-link--jump');
    let item;
    for (let i, len = (await items.all()).length; i < len; i++) {
      item = String(items[i]);
      components[i] = item.substring(item.lastIndexOf('/design-system/') + 14);
    }
  });

  components.forEach((component) => {
    test(`should show/hide ${component} details across all component pages`, async ({
      page,
    }) => {
      await page.goto('components/' + component);
      await page.reload();
      console.log('should hide snippet tabs by default');
      // Show details button.
      await expect(
        page
          .locator('cfpb-button')
          .getByText(/SHOW DETAILS/)
          .first(),
      ).toBeVisible();
      // Hide details button.
      await expect(
        page
          .locator('cfpb-button')
          .getByText(/HIDE DETAILS/)
          .first(),
      ).toBeHidden();
      // Detail tabs.
      await expect(page.locator('.m-tabs').first()).toBeHidden();
      console.log('should show code snippets when toggle button is clicked');
      // Show details button.
      await page
        .locator('cfpb-button')
        .getByText(/SHOW DETAILS/)
        .first()
        .click();
      await expect(
        page
          .locator('cfpb-button')
          .getByText(/SHOW DETAILS/)
          .first(),
      ).toBeHidden();
      // Hide details button.
      await expect(
        page
          .locator('cfpb-button')
          .getByText(/HIDE DETAILS/)
          .first(),
      ).toBeVisible();
      // Detail tabs.
      await expect(page.locator('.m-tabs').first()).toBeVisible();
      console.log(
        'should re-hide code snippets when toggle button is clicked again',
      );
      // Hide details button.
      await page
        .locator('cfpb-button')
        .getByText(/HIDE DETAILS/)
        .first()
        .click();
      await expect(
        page
          .locator('cfpb-button')
          .getByText(/HIDE DETAILS/)
          .first(),
      ).toBeHidden();
      // Detail tabs.
      await expect(page.locator('.m-tabs').first()).toBeHidden();
    });
  });
});
