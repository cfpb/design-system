import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CfpbLink } from './index.js';

const element = 'cfpb-link';

/**
 * @returns {HTMLElement} The <cfpb-link> element.
 */
function getElement() {
  return document.body.querySelector(element);
}

/**
 * @returns {ShadowRoot} The <cfpb-link> element's shadow DOM.
 */
function getShadowDom() {
  return getElement().shadowRoot;
}

/**
 * Wait for update cycle to complete.
 */
async function updateComplete() {
  await new Promise((resolve) => requestAnimationFrame(resolve));
}

describe(`${element} component`, () => {
  let warnSpy;

  beforeEach(() => {
    CfpbLink.init();

    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    document.body.innerHTML = `
      <${element}>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener"
          aria-label="Test link"
          class="ignored"
          id="ignored"
          style="color:red"
        >
          A link
        </a>
      </${element}>
    `;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders a standard link', () => {
    const lightAnchor = getElement().querySelector('a');
    const shadowAnchor = getShadowDom().querySelector('a');

    // Ensure light dom contains an anchor element.
    expect(lightAnchor).not.toBeNull();

    // Ensure it has the right text inside.
    expect(lightAnchor.textContent?.trim()).toEqual('A link');

    // Ensure it doesn't have any other children.
    expect(lightAnchor.children.length).to.equal(0);

    // Ensure shadow dom contains an anchor element
    expect(shadowAnchor).not.toBeNull();

    // Ensure shadow dom anchor contains a cfpb-icon-text.
    expect(shadowAnchor.querySelector('cfpb-icon-text')).not.toBeNull();
  });

  it('copies allowed attributes to rendered anchor', () => {
    const shadowAnchor = getShadowDom().querySelector('a');

    expect(shadowAnchor.getAttribute('href')).to.equal('#');
    expect(shadowAnchor.getAttribute('target')).to.equal('_blank');
    expect(shadowAnchor.getAttribute('rel')).to.equal('noopener');
    expect(shadowAnchor.getAttribute('aria-label')).to.equal('Test link');

    // Blocked attributes should not be copied.
    expect(shadowAnchor.hasAttribute('class')).to.equal(false);
    expect(shadowAnchor.hasAttribute('id')).to.equal(false);

    // Style may exist from Lit/runtime, so verify our inline style
    // was not forwarded.
    expect(shadowAnchor.getAttribute('style')).to.not.equal('color:red');
  });

  it('warns when no slotted anchor exists', async () => {
    document.body.innerHTML = `<${element}></${element}>`;

    await updateComplete();

    expect(warnSpy).toHaveBeenCalledWith('cfpb-link expects a slotted <a>');
  });

  it('warns and resets invalid variants', async () => {
    const elm = getElement();

    elm.linkVariant = 'pawpaw';

    await updateComplete();

    expect(warnSpy).toHaveBeenCalledWith('Invalid link variant "pawpaw"');
  });

  it('adds underline attribute tablet-up when href attribute exists', async () => {
    const iconText = getShadowDom().querySelector('cfpb-icon-text');
    expect(iconText.getAttribute('underline')).to.equal('tablet-up');
  });

  it('adds underline attribute all sizes when href and inline attribute exists', async () => {
    const elm = getElement();

    elm.setAttribute('inline', '');

    await updateComplete();

    const iconText = getShadowDom().querySelector('cfpb-icon-text');

    expect(iconText.getAttribute('underline')).to.equal('all');
  });
});
