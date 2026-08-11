import { test, expect } from '@playwright/test';

test.describe('Multiselect', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('components/selects');
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.locator('.a-live__code').first()).toBeVisible();
  });

  test('should show the first multiselect option when opened', async ({
    page,
  }) => {
    await page.locator('.a-live__code .o-multiselect__search').click();
    await expect(
      page.locator('.a-live__code .o-multiselect__options li:first-child'),
    ).toBeVisible();
  });

  test('should not show the last multiselect option until the user scrolls to it', async ({
    page,
  }) => {
    await page.locator('.a-live__code .o-multiselect__search').click();
    await page
      .locator('.a-live__code .o-multiselect__options li:last-child')
      .scrollIntoViewIfNeeded();
    // Ensure multiselect has fully expanded
    await expect(
      page.locator('.a-live__code .o-multiselect__options li:last-child'),
    ).toBeVisible();
  });

  test('should correctly filter the multiselect options', async ({ page }) => {
    await page.locator('.a-live__code .o-multiselect__search').click();
    // Find option #4.
    await page.locator('.a-live__code .o-multiselect__search').fill('ion 4');
    // First multiselect option.
    await expect(
      page.locator(
        '.a-live__code .o-multiselect__options li[data-option=option1]',
      ),
    ).toBeHidden();
    // Fourth multiselect option.
    await expect(
      page.locator(
        '.a-live__code .o-multiselect__options li[data-option=option4]',
      ),
    ).toBeVisible();
    // Eighth multiselect option.
    await expect(
      page.locator(
        '.a-live__code .o-multiselect__options li[data-option=option8]',
      ),
    ).toBeHidden();
    // Find the last really long option.
    await page.locator('.a-live__code .o-multiselect__search').clear();
    await page.locator('.a-live__code .o-multiselect__search').fill('superca');
    // First multiselect option.
    await expect(
      page.locator(
        '.a-live__code .o-multiselect__options li[data-option=option1]',
      ),
    ).toBeHidden();
    // Fourth multiselect option.
    await expect(
      page.locator(
        '.a-live__code .o-multiselect__options li[data-option=option4]',
      ),
    ).toBeHidden();
    // Eighth multiselect option.
    await expect(
      page.locator(
        '.a-live__code .o-multiselect__options li[data-option=option8]',
      ),
    ).toBeVisible();
  });

  test('should let the user remove a choice', async ({ page }) => {
    // Verify option1 is selected by default.
    await expect(
      page.locator(
        '.o-multiselect .m-tag-group label[for=test_select__multiple-option1] svg',
      ),
    ).toBeVisible();
    // Verify option1 can be removed.
    await page
      .locator(
        '.o-multiselect .m-tag-group label[for=test_select__multiple-option1] svg',
      )
      .locator('..')
      .locator('..')
      .click();
    await expect(
      page.locator(
        '.o-multiselect .m-tag-group label[for=test_select__multiple-option1] svg',
      ),
    ).toBeHidden();
  });

  test('should let the user add a choice', async ({ page }) => {
    await page.locator('.a-live__code .o-multiselect__search').click();
    await page
      .locator(
        '.a-live__code .o-multiselect__options li[data-option=option2] label',
      )
      .click();
    await expect(
      page.locator(
        '.a-live__code .o-multiselect .m-tag-group label[for=test_select__multiple-option2] svg',
      ),
    ).toBeVisible();
  });
});
