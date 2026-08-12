import { test, expect } from '@playwright/test';

test.describe('The search feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('search/');
  });

  test('should show no search results', async ({ page }) => {
    await expect(page.locator('#search-results')).toHaveText(
      /No search results found for ''\./,
    );
  });

  test('should show search results', async ({ page }) => {
    await expect(
      page.locator('#search-box').locator('cfpb-form-search-input'),
    ).toBeVisible();
    await page
      .locator('#search-box')
      .locator('cfpb-form-search-input')
      .locator('input[type=search]')
      .fill('button');
    await page.locator('#search-box').locator('button[type=submit]').click();
    await expect
      .poll(async () => page.locator('#search-results').locator('li').count())
      .toBeGreaterThanOrEqual(1);
  });

  test('should show search results on enter key press', async ({ page }) => {
    await expect(
      page.locator('#search-box').locator('cfpb-form-search-input'),
    ).toBeVisible();
    await page
      .locator('#search-box')
      .locator('cfpb-form-search-input')
      .locator('input[type=search]')
      .fill('expandable');
    await page
      .locator('#search-box')
      .locator('cfpb-form-search-input')
      .locator('input[type=search]')
      .press('Enter');
    await expect
      .poll(async () => page.locator('#search-results').locator('li').count())
      .toBeGreaterThanOrEqual(1);
  });
});
