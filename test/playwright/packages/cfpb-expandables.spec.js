import { test, expect } from '@playwright/test';

test.describe('Basic CFPB expandable', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('components/expandables');
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.locator('.a-live__code').first()).toBeVisible();
  });

  test('should hide expandable content on page load', async ({ page }) => {
    // Expandable content.
    await expect(
      page.locator('.a-live__code .o-expandable__content').first(),
    ).toHaveCSS('display', 'none');
  });

  test('should open expandable when header is clicked', async ({ page }) => {
    // Expandable header.
    await page
      .locator('.a-live__code button.o-expandable__header')
      .first()
      .click();
    // Expandable content.
    await expect(
      page.locator('.a-live__code .o-expandable__content').first(),
    ).not.toHaveCSS('display', 'none');
  });

  test('should close expandable when header is clicked again', async ({
    page,
  }) => {
    // Expandable header.
    await page
      .locator('.a-live__code button.o-expandable__header')
      .last()
      .click();
    await expect(
      page.locator('.a-live__code .o-expandable__content').last(),
    ).not.toHaveCSS('display', 'none');
    await page
      .locator('.a-live__code button.o-expandable__header')
      .last()
      .click();
    // Expandable content.
    await expect(
      page.locator('.a-live__code .o-expandable__content').last(),
    ).toHaveCSS('display', 'none');
  });
});
