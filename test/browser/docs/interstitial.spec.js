import { test, expect } from '@playwright/test';

test.describe('CMS interstitial page with editing instructions', () => {
  test.describe('Editing a component page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/design-system/components/banner-notification');
      const editButton = await page.locator('#edit-page');
      await expect(editButton).toBeVisible();
      await editButton.click();
    });

    test("should show the interstitial if the user hasn't seen it before", async ({
      page,
    }) => {
      await expect(page).toHaveTitle(
        'Updating this website - CFPB Design System'
      );
    });

    test.skip('should not show the interstitial if the user has already seen it', async ({
      page,
    }) => {
      await expect(page.locator('button:text("Delete entry")')).toBeVisible();
      await expect(page).toHaveTitle('Content Manager');
    });
  });
});
