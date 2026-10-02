import { test, expect } from '@playwright/test';

test.describe('CMS interstitial page with editing instructions', () => {
  test.describe('Editing a component page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('components/banner-notification');
      await expect(page.locator('#edit-page')).toBeVisible();
      await page.locator('#edit-page').click();
    });

    test("should show the interstitial if the user hasn't seen it before", async ({
      page,
    }) => {
      await expect(page).toHaveTitle(
        'Updating this website - CFPB Design System',
      );
    });

    test('should not show the interstitial if the user has already seen it', async ({
      page,
    }) => {
      await expect(page).toHaveTitle(
        'Updating this website - CFPB Design System',
      );

      // The title is set before the interstitial script runs,
      // so wait for the script to record that the page was seen.

      await expect
        .poll(() => page.localStorage.getItem('cms-directions-last-seen'))
        .not.toBeNull();

      await page.goto('components');
      await page.goto('components/banner-notification');

      const storageValue = await page.localStorage.getItem(
        'cms-directions-last-seen',
      );
      expect(storageValue).not.toBeNull();

      await expect(page.locator('#edit-page')).toBeVisible();
      await page.locator('#edit-page').click();

      await expect(page).toHaveTitle('Content Manager');
    });
  });
});
