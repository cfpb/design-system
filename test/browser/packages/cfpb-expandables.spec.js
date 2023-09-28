import { test, expect } from '@playwright/test';

test.describe('Basic CFPB expandable', () => {
  let expandableHeader;
  let expandableContent;

  test.beforeEach(async ({ page }) => {
    await page.goto('/design-system/components/expandables');
    await page.setViewportSize({ width: 1024, height: 768 });
    // Selects the first expandable live code sample, "Basic expandable"
    expandableHeader = await page
      .locator('.a-live_code button.o-expandable_header')
      .first();
    expandableContent = await page
      .locator('.a-live_code .o-expandable_content')
      .first();
  });

  test('should hide expandable content on page load', async () => {
    await expect(expandableContent).not.toBeVisible();
  });

  test('should open expandable when header is clicked', async () => {
    await expandableHeader.click();
    await expect(expandableContent).toBeVisible();
  });

  test('should close expandable when header is clicked again', async () => {
    await expandableHeader.click();
    await expandableHeader.click();
    await expect(expandableContent).not.toBeVisible();
  });
});
