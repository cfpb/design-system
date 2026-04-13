/**
 * Determine whether the local Storybook pilot asked to skip the proxy login
 * screen for local editing.
 * @returns {boolean} True when the pilot edit link requested local autologin.
 */
function shouldAutoLoginLocalProxy() {
  const params = new URLSearchParams(window.location.search);

  return (
    params.get('local_proxy_autologin') === '1' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname)
  );
}

/**
 * Auto-click the Decap proxy login button for the local Storybook pilot so the
 * editor opens directly instead of stopping at the mock proxy auth screen.
 * @returns {void} Nothing.
 */
function autoLoginLocalProxyOnce() {
  if (!shouldAutoLoginLocalProxy()) {
    return;
  }

  // Decap's proxy backend always renders a fake "Login" screen first, even
  // though the local proxy does not perform real authentication. The Storybook
  // pilot used to flow directly into the editor, so keep that local-only
  // behavior by clicking the proxy login button once when the edit link opts
  // in via query param.
  const observer = new MutationObserver(() => {
    const loginButton = Array.from(document.querySelectorAll('button')).find(
      (button) => button.textContent?.trim() === 'Login',
    );

    if (!loginButton) {
      return;
    }

    observer.disconnect();
    loginButton.click();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Bootstrap the Decap admin app with the repo-specific widget, preview, and
 * content-model registrations.
 * @returns {Promise<void>}
 */
async function bootstrapCms() {
  const [
    { registerDecapCoreExtensions },
    { registerCmsWidgets },
    { registerStorybookContentModel },
    { registerLegacyPreviewTemplates },
    { registerStorybookPreviewTemplate },
  ] = await Promise.all([
    import('./registerDecapCoreExtensions.js'),
    import('./registerCmsWidgets.js'),
    import('./registerStorybookContentModel.js'),
    import('./registerLegacyPreviewTemplates.js'),
    import('./registerStorybookPreviewTemplate.js'),
  ]);
  const CMS = registerDecapCoreExtensions();

  registerCmsWidgets(CMS);
  registerStorybookContentModel(CMS);
  registerLegacyPreviewTemplates(CMS);
  registerStorybookPreviewTemplate(CMS);
  autoLoginLocalProxyOnce();
  CMS.init();
}

bootstrapCms().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
});
