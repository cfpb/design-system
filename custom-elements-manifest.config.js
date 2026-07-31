import { jsxTypesPlugin } from '@wc-toolkit/jsx-types';

/**
 * CEM analyzer plugin that sorts 'modules' (components) by path before the manifest is
 * written out. `globby`'s file discovery order isn't stable across runs or
 * machines, which would cause render only diffs even when source hasn't changed. MUST
 * run before `jsxTypesPlugin` in the plugin array so it sees the sorted order too.
 * @returns {import('@custom-elements-manifest/analyzer').Plugin} - Returns the sorted modules based on path
 */
function sortModulesPlugin() {
  return {
    name: 'sort-modules',
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest.modules.sort((a, b) =>
        a.path.localeCompare(b.path),
      );
    },
  };
}

/**
 * True when `node` is a Lit `static properties` declaration, in either the
 * `static properties = {}` or `static get properties() {}` forms.
 * @param {object} node - The TS AST node to test.
 * @param {object} ts - The TS module the analyzer is running with.
 * @returns {boolean} - Whether the node declares Lit's reactive properties.
 */
function isStaticProperties(node, ts) {
  return (
    (ts.isPropertyDeclaration(node) || ts.isGetAccessor(node)) &&
    node?.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.StaticKeyword) &&
    node.name?.getText() === 'properties'
  );
}

/**
 * Returns the object literal holding the individual property declarations.
 * @param {object} node - A node that satisfies `isStaticProperties`.
 * @param {object} ts - The TS module the analayzer is running with.
 * @returns {object | undefined} - The object literal expression when present.
 */
function getPropertiesObject(node, ts) {
  return ts.isGetAccessor(node)
    ? node.body?.statements?.find(ts.isReturnStatement)?.expression
    : node.initializer;
}

/**
 * Plugin that removes the attributes that the analyzer invents for Lit's
 * internal reactive state. Lit forces `attribute - false` whenever a property is
 * declared `state: true` so those props would have no attribute in the DOM at all.
 * The rub is that the analyzer's Lit plugin only skips a property when it sees a literal
 * `attribute: false` it never checks `state`. The result is that internal state is
 * published as public API, and Storybook renders attribute controls that silently do nothing
 * because Lit is not observing the attribute they write to. Dropping the attr moves
 * these props into Storybook's `properties` category, where these will actually work.
 * @returns {import('custom-elements-manifest/analyzer').Plugin} - Returns the manifest without attributes for `state: true` properties
 */
function ignoreLitStatePropertiesPlugin() {
  return {
    name: 'ignore-list-state-properties',
    analyzePhase({ ts, node, moduleDoc }) {
      if (!isStaticProperties(node, ts)) return;

      const stateNames = new Set();
      for (const property of getPropertiesObject(node, ts)?.properties ?? []) {
        if (property.kind !== ts.SyntaxKind.PropertyAssignment) continue;
        const isState = (property.initializer?.properties ?? []).some(
          (option) =>
            option.name?.getText() === 'state' &&
            option.initializer?.kind === ts.SyntaxKind.TrueKeyword,
        );
        if (isState) stateNames.add(property.name?.getText());
      }
      if (!stateNames.size) return;

      //Scoped to this module so a state property in on file can never strip a
      // same-named pub attr from another file
      for (const declaration of moduleDoc.declarations ?? []) {
        if (declaration.attributes) {
          declaration.attributes = declaration.attributes.filter(
            (attribute) => !stateNames.has(attribute.fieldName),
          );
        }
        for (const member of declaration.members ?? []) {
          if (!stateNames.has(member.name)) continue;
          delete member.attribute;
          delete member.reflects;
        }
      }
    },
  };
}

/**
 * CEM analyzer plugin that lowercases attribute names the analyzer derived from a
 * property name. When a `static properties` entry omits `attribute:` Lit derives the
 * observed attribute with `name.toLowerCase()` EG `isLarge -> islarge` BUT the analyzer
 * records the name verbatim. So, the manifest claims an attribute `isLarge` that never
 * exists in the DOM. Consumers that trust the manifest then break because `getStorybookHelpers`
 * renders `isLarge` and its arg-sync MutationObserver can't match the two. What that translates
 * to is that a control will flip on and snaps back to the default. This plugin MUST run before
 * `jsxTypesPlugin` in the array so generated types use the corrected name.
 * @returns {import('custom-elements-manifest/analyzer').Plugin} - Returns the manifest with derived attribute names lowercased
 */
function lowercaseDerivedAttributesPlugin() {
  return {
    name: 'lowercase-derived-attributes',
    packageLinkPhase({ customElementsManifest }) {
      for (const module of customElementsManifest.modules) {
        for (const declaration of module.declarations ?? []) {
          for (const attribute of declaration.attributes ?? []) {
            // An explicit `attribute:` makes the manifest differ from the field
            // name. When they are identical the analyzer just copied the property name,
            // which is the case Lit would have lowercased
            if (attribute.name !== attribute.fieldName) continue;
            const derived = attribute.name.toLowerCase();
            if (derived === attribute.name) continue;
            attribute.name = derived;
            const member = declaration.members?.find(
              (x) => x.kind === 'field' && x.name === attribute.fieldName,
            );
            if (member) member.attribute = derived;
          }
        }
      }
    },
  };
}

export default {
  globs: ['packages/cfpb-design-system/src/elements/**/*.js'],
  exclude: ['**/*.spec.js', '**/utilities/**'],
  outdir: 'storybook',
  litelement: true,
  plugins: [
    sortModulesPlugin(),
    ignoreLitStatePropertiesPlugin(),
    lowercaseDerivedAttributesPlugin(),
    jsxTypesPlugin({
      outdir: 'storybook',
      fileName: 'custom-elements-types.d.ts',
      // Generate imports relative to the storybook/ output dir
      componentTypePath: (_name, _tag, modulePath) => `../${modulePath}`,
    }),
  ],
};
