import {
  extractJumpLinks,
  parseMdxDocument,
  slugifyValue,
} from '../../storybook/lib/content.js';
import { buildAdminEntryUrl } from '../../storybook/lib/edit-links.js';
import {
  buildStorybookMdxBody,
  normalizeStorybookContentData,
} from '../../storybook/lib/structured-content.js';
import {
  findFirstLevelHeadingForPage,
  findNavigationPathForPage,
  getNavigationPageEntries,
  getStorybookTitle,
  parseNavigationTree,
} from '../../storybook/lib/navigation.js';

describe('storybook pilot content helpers', () => {
  it('parses MDX frontmatter and body', () => {
    const document = `---
title: Buttons
slug: buttons
section: components
---

<Section title="Use cases">
Body content
</Section>`;

    const parsed = parseMdxDocument(document);

    expect(parsed.frontmatter.title).toBe('Buttons');
    expect(parsed.frontmatter.slug).toBe('buttons');
    expect(parsed.body).toContain('<Section title="Use cases">');
  });

  it('extracts jump links from section and variation titles', () => {
    const body = `<VariationGroup title="Types">
  <Variation title="Primary" />
</VariationGroup>

<Section title="Guidelines">
  Example
</Section>`;

    expect(extractJumpLinks(body)).toEqual(['Types', 'Guidelines']);
  });

  it('builds MDX from the structured storybook content model', () => {
    const body = buildStorybookMdxBody({
      variation_groups: [
        {
          variation_group_name: 'Types',
          variation_group_description: 'Shared button styles.',
          variations: [
            {
              variation_name: 'Primary button',
              variation_description: 'Use for the main action.',
              variation_code_snippet: '<button class="a-btn">Primary</button>',
            },
          ],
        },
      ],
      guidelines: '- Keep labels short.',
      restrictions: [
        {
          restrictions_do: '<button class="a-btn">Short label</button>',
          restrictions_do_not:
            '<button class="a-btn">This label is much too long</button>',
        },
      ],
    });

    expect(body).toContain('<VariationGroup');
    expect(body).toContain('title={`Types`}');
    expect(body).toContain('<Variation');
    expect(body).toContain('title={`Primary button`}');
    expect(body).toContain('<Section title={`Guidelines`}>');
    expect(body).toContain('<Section title={`Restrictions`}>');
    expect(body).toContain('<GuidancePair');
  });

  it('preserves false booleans when normalizing structured content', () => {
    const normalized = normalizeStorybookContentData({
      variation_groups: [
        {
          variations: [
            {
              variation_name: 'Button with icon',
              variation_is_deprecated: false,
            },
          ],
        },
      ],
    });

    expect(
      normalized.variation_groups[0].variations[0].variation_is_deprecated,
    ).toBe(false);
    expect(buildStorybookMdxBody(normalized)).not.toContain('deprecated');
  });

  it('finds the first level navigation heading for a page', () => {
    const navigation = parseNavigationTree(`first-level:
  - heading: Components
    second-level:
      - heading: Components
        nav-items:
          - page: Buttons`);

    expect(findFirstLevelHeadingForPage(navigation, 'Buttons')).toBe(
      'Components',
    );
  });

  it('builds the Storybook section title from navigation', () => {
    const navigation = parseNavigationTree(`first-level:
  - heading: Components
    second-level:
      - heading: Components
        nav-items:
          - page: Buttons`);

    expect(getStorybookTitle(navigation, 'Buttons')).toBe('Website/Components');
  });

  it('captures the full navigation path for nested pages', () => {
    const navigation = parseNavigationTree(`first-level:
  - heading: Patterns
    second-level:
      - heading: Interaction patterns
        third-level:
          - heading: Forms
            nav-items:
              - page: Email signup forms`);

    expect(findNavigationPathForPage(navigation, 'Email signup forms')).toEqual(
      ['Patterns', 'Interaction patterns', 'Forms'],
    );
  });

  it('preserves page order from navigation', () => {
    const navigation = parseNavigationTree(`first-level:
  - heading: Components
    nav-items:
      - page: Buttons
      - page: Alerts
    second-level:
      - heading: Forms
        nav-items:
          - page: Checkboxes`);

    expect(getNavigationPageEntries(navigation)).toEqual([
      {
        page: 'Buttons',
        path: ['Components'],
        title: 'Website/Components',
      },
      {
        page: 'Alerts',
        path: ['Components'],
        title: 'Website/Components',
      },
      {
        page: 'Checkboxes',
        path: ['Components', 'Forms'],
        title: 'Website/Components/Forms',
      },
    ]);
  });

  it('builds a decap entry URL for a storybook page', () => {
    const entry = {
      collectionName: 'storybook-pages',
      sourcePath: 'storybook/content/pages/buttons.mdx',
      frontmatter: {
        title: 'Buttons',
      },
      body: '',
    };

    expect(buildAdminEntryUrl(entry)).toBe(
      '/design-system/admin/index.html?local_proxy_autologin=1#/collections/storybook-pages/entries/buttons',
    );
  });

  it('slugifies values consistently for routes', () => {
    expect(slugifyValue('Banner (notification)')).toBe('banner-notification');
  });
});
