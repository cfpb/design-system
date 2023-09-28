import { test, expect } from '@playwright/test';

test.describe('Multiselect', () => {
  let multiselectInput;

  test.beforeEach(async ({ page }) => {
    await page.goto('/design-system/components/dropdowns-and-multiselects');
    await page.setViewportSize({ width: 1024, height: 768 });

    // Wait till page has loaded.
    page.waitForLoadState('domcontentloaded');

    multiselectInput = await page.locator('.a-live_code .o-multiselect_search');
  });

  test('should show the first multiselect option when opened', async ({
    page,
  }) => {
    await multiselectInput.click();
    // Ensure multiselect has fully expanded
    const firstMultiSelectOption = await page.locator(
      '.a-live_code .o-multiselect_options li:first-child'
    );
    await expect(firstMultiSelectOption).toBeVisible();
  });

  test('should not show the last multiselect option until the user scrolls to it', async ({
    page,
  }) => {
    await multiselectInput.click();
    /*const multiselectFieldset = await page.locator(
      '.a-live_code .o-multiselect_fieldset'
    );*/
    const lastMultiSelectOption = await page.locator(
      '.a-live_code .o-multiselect_options li:last-child'
    );
    await lastMultiSelectOption.scrollIntoViewIfNeeded();
    const multiselectFieldsetScrollTop = page.evaluate(() => {
      return document.querySelector('.a-live_code .o-multiselect_fieldset')
        .scrollTop;
    });
    /*const multiselectFieldsetScrollTop = await multiselectFieldset.getProperty(
      'scrollTop'
    );*/
    // Ensure multiselect has fully expanded
    //await browser.pause(300);
    // If the scrollTop of the fieldset is zero, it means no scrolling was necessary to reach
    // the last multiselect option which indicates the options aren't contained within the
    // scrollable area and are spilling over due to a browser or CSS bug.
    await expect.poll(() => multiselectFieldsetScrollTop).toBeGreaterThan(0);
  });

  test('should correctly filter the multiselect options', async ({ page }) => {
    await multiselectInput.click();
    // Ensure multiselect has fully expanded
    //await browser.pause(300);

    const firstMultiSelectOption = await page.locator(
      '.a-live_code .o-multiselect_options li[data-option=option1]'
    );
    const fourthMultiSelectOption = await page.locator(
      '.a-live_code .o-multiselect_options li[data-option=option4]'
    );
    const longMultiSelectOption = await page.locator(
      '.a-live_code .o-multiselect_options li[data-option=option8]'
    );

    // Find option #4
    await multiselectInput.type('ion 4');
    await expect(firstMultiSelectOption).not.toBeVisible();
    await expect(fourthMultiSelectOption).toBeVisible();
    await expect(longMultiSelectOption).not.toBeVisible();

    // Find the last really long option
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');
    await multiselectInput.type('superca');
    await expect(firstMultiSelectOption).not.toBeVisible();
    await expect(fourthMultiSelectOption).not.toBeVisible();
    await expect(longMultiSelectOption).toBeVisible();
  });

  test('should let the user remove a choice', async ({ page }) => {
    // Verify option1 is selected by default
    const multiSelectChoice = await page.locator(
      '.o-multiselect_choices label[for=test_select__multiple-option1]'
    );
    await expect(multiSelectChoice).toBeVisible();

    // Verify option1 can be removed
    await multiSelectChoice.click();
    await expect(multiSelectChoice).not.toBeVisible();
  });

  test('should let the user add a choice', async ({ page }) => {
    await multiselectInput.click();

    await page.hover(
      '.o-multiselect_choices label[for=test_select__multiple-option1]'
    );

    const secondMultiSelectOption = await page.locator(
      '.a-live_code .o-multiselect_options li[data-option=option2]'
    );
    await secondMultiSelectOption.click();

    const secondMultiSelectChoice = await page.locator(
      '.a-live_code .o-multiselect_choices label[for=test_select__multiple-option2]'
    );
    await expect(secondMultiSelectChoice).toBeVisible();
  });
});
