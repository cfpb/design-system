import { test, expect } from '@playwright/test';

test.describe('The "show details" toggling feature', async () => {
  let showDetailsButton;
  let hideDetailsButton;
  let detailsTabs;
  let componentPages = [];

  test.beforeEach(async ({ page }) => {
    await page.goto('/design-system/components/');
    await page.setViewportSize({ width: 1600, height: 1200 });
    const sideNav = await page.locator('.ds-nav').first();
    await expect(sideNav).toBeVisible();
    for (const lnk of await page.locator('.ds-nav-2 .m-list_link').all()) {
      componentPages.push(lnk);
    }

    // If tests are being run via Sauce Labs, only test ten random component pages.
    // Testing all of them takes 30+ minutes and Sauce Labs has a max test length of 30 min.
    if (global.SAUCE_LABS) {
      componentPages.sort(() => 0.5 - Math.random());
      componentPages = componentPages.slice(0, 10);
    }
  });

  //test('should show/hide details across all component pages', async () => {
  for (let i = 0, len = componentPages.length; i < len; i++) {
    componentPage = componentPages[i];
    const componentName = await componentPage.textContent();
    const componentUrl = await componentPage.getAttribute('href');
    test.describe(`The ${componentName} component page`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(componentUrl);
        await page.reload();
        showDetailsButton = await page.locator('button=Show details');
        hideDetailsButton = await page.locator('button=Hide details');
        detailsTabs = [...(await page.locator('.m-tabs'))];
      });

      test('should hide snippet tabs by default', async () => {
        if (
          !(await showDetailsButton.isVisible()) ||
          !(await hideDetailsButton.isVisible())
        ) {
          this.runnable().skip();
        }
        await expect(showDetailsButton).toBeVisible();
        await expect(hideDetailsButton).not.toBeVisible();

        detailsTabs.some(async (snippet) => {
          await expect(snippet).not.toBeVisible();
        });
      });

      test('should show code snippets when toggle button is clicked', async () => {
        if (
          (await !showDetailsButton.isVisible()) ||
          (await !hideDetailsButton.isVisible())
        ) {
          this.runnable().skip();
        }
        await showDetailsButton.click();
        await expect(showDetailsButton).not.toBeVisible();
        await expect(hideDetailsButton).toBeVisible();
        detailsTabs.some(async (snippet) => {
          await expect(snippet).toBeVisible();
        });
      });

      test('should re-hide code snippets when toggle button is clicked again', async () => {
        await hideDetailsButton.click();
        await expect(showDetailsButton).toBeVisible();
        await expect(hideDetailsButton).not.toBeVisible();
        detailsTabs.some(async (snippet) => {
          await expect(snippet).not.toBeVisible();
        });
      });
    });
  }
  //});
});
