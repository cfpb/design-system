/* eslint-disable max-nested-callbacks */
/* eslint-disable no-undef */

describe('The "show details" toggling feature', () => {
  let showDetailsButton;
  let hideDetailsButton;
  let detailsTabs;
  let componentPages;

  before(async () => {
    await browser.url('/design-system/components/');
    await browser.setWindowSize(1600, 1200);
    const sideNav = await $('.ds-nav');
    await sideNav.waitForDisplayed();
    componentPages = await $$('.ds-nav-2 .m-list_link');

    // If tests are being run via Sauce Labs, only test ten random component pages.
    // Testing all of them takes 30+ minutes and Sauce Labs has a max test length of 30 min.
    if (global.SAUCE_LABS) {
      componentPages.sort(() => 0.5 - Math.random());
      componentPages = componentPages.slice(0, 10);
    }
  });

  it('should show/hide details across all component pages', async () => {
    for (const componentPage of componentPages) {
      const componentName = await componentPage.getText();
      const componentUrl = await componentPage.getAttribute('href');
      describe(`The ${componentName} component page`, () => {
        before(async () => {
          await browser.url(componentUrl);
          await browser.refresh();
          showDetailsButton = await $('button=Show details');
          hideDetailsButton = await $('button=Hide details');
          detailsTabs = [...(await $$('.m-tabs'))];
        });

        it('should hide snippet tabs by default', async () => {
          if (
            (await !showDetailsButton.isExisting()) ||
            (await !hideDetailsButton.isExisting())
          ) {
            this.skip();
          }
          await expect(showDetailsButton).toBeDisplayed();
          await expect(hideDetailsButton).not.toBeDisplayed();

          detailsTabs.some(async (snippet) => {
            await expect(snippet).not.toBeDisplayed();
          });
        });

        it('should show code snippets when toggle button is clicked', async () => {
          if (
            (await !showDetailsButton.isExisting()) ||
            (await !hideDetailsButton.isExisting())
          ) {
            this.skip();
          }
          await showDetailsButton.click();
          await expect(showDetailsButton).not.toBeDisplayed();
          await expect(hideDetailsButton).toBeDisplayed();
          detailsTabs.some(async (snippet) => {
            await expect(snippet).toBeDisplayed();
          });
        });

        it('should re-hide code snippets when toggle button is clicked again', async () => {
          await hideDetailsButton.click();
          await expect(showDetailsButton).toBeDisplayed();
          await expect(hideDetailsButton).not.toBeDisplayed();
          detailsTabs.some(async (snippet) => {
            await expect(snippet).not.toBeDisplayed();
          });
        });
      });
    }
  });
});
