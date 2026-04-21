const DEFAULT_CONFIG = {
  iconPath: './icons/',
};

let config = { ...DEFAULT_CONFIG };
let initialized = false;

const ALLOWED_KEYS = Object.keys(DEFAULT_CONFIG);

/**
 * Set the shared configuration for the project.
 * @param {object} userConfig - User supplied settings that override DEFAULT_CONFIG settings.
 */
export function setSharedConfig(userConfig) {
  if (initialized) {
    // eslint-disable-next-line no-console
    console.warn('CFPB Design System config already initialized');
    return;
  }

  for (const key of Object.keys(userConfig)) {
    if (!ALLOWED_KEYS.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`CFPB Design System invalid config key: ${key}`);
    }
  }

  config = {
    ...config,
    ...userConfig,
  };

  initialized = true;
}

/**
 * @returns {object} The shared config used in the project.
 */
export function getSharedConfig() {
  return config;
}

/**
 * Check if a custom element is registered, and if not, define it on the globalThis (window).
 * @param {string} tag - A custom element's tag as it appears in markup.
 * @param {HTMLElement} constructor - A custom element constructor.
 */
export function defineComponent(tag, constructor) {
  if (!globalThis.customElements.get(tag)) {
    globalThis.customElements.define(tag, constructor);
  }
}
