import { test, expect } from '@playwright/test';

const PAGE_LOAD_DELAY = 120_000;

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

      await page.goto('components/banner-notification');
      await expect(page.locator('#edit-page')).toBeVisible({
        timeout: PAGE_LOAD_DELAY,
      });
      await page.locator('#edit-page').click();

      const storageValue = await page.localStorage.getItem(
        'cms-directions-last-seen',
      );
      expect(storageValue).not.toBeNull();

      await expect(page).toHaveTitle('Content Manager');
    });
  });
});
