/**
 * Helpers shared across the Web Component `index.spec.js` files.
 *
 * The rely only on the DOM so they keep working if Storybook is replaced.
 */

// Everything mount() has added to the document so cleanup() can remove it
const mounted = new Set();

/**
 * Mount a custom element and wait for its first render
 *
 * The element's `init()` needs to have run so call it once at
 * the top of the `describe` block.
 * @param {string} tag - The custom element tag, EG `cfpb-button`.
 * @param {object} [options] - How to se the element up.
 * @param {object} [options.attributes] - Attribute name/value pairs and a value of `true` sets bool so `{ disabled: true } works.
 * @param {object} [options.properties] - Properties assigned directly to the element for anything that has no attr or is not a string.
 * @param {string} [options.text] - Text content for the default slot.
 * @param {string} [options.html] - Markup for the default slot. Takes precedence over `text`.
 * @returns {Promise<HTMLElement>} The mounted, rendered element.
 */
export async function mount(
  tag,
  { attributes = {}, properties = {}, text, html } = {},
) {
  if (!customElements.get(tag)) {
    throw new Error(
      `<${tag}> is not registered. Call its init() before mount(), ` +
        `for example \`CfpbButton.init()\` at the top of the description block.`,
    );
  }

  const elm = document.createElement(tag);

  for (const [name, value] of Object.entries(attributes)) {
    if (value === false || value === undefined || value === null) continue;
    elm.setAttribute(name, value === true ? '' : value);
  }

  Object.assign(elm, properties);

  if (html !== undefined) {
    elm.innerHTML = html;
  } else if (text !== undefined) {
    elm.textContent = text;
  }

  document.body.appendChild(elm);
  mounted.add(elm);

  await customElements.whenDefined(tag);
  if (elm.updatedComplete) await elm.updateComplete;

  return elm;
}

/**
 * Remove everything mount() added to the document. Pass it straight
 * to `afterEach(cleanup)`
 */
export function cleanup() {
  for (const elm of mounted) {
    elm.remove();
  }
  mounted.clear();
}
