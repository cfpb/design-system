const SECTION_DEFINITIONS = [
  ['use_cases', 'Use cases'],
  ['guidelines', 'Guidelines'],
  ['behavior', 'Behavior'],
  ['restrictions', 'Restrictions'],
  ['accessibility', 'Accessibility'],
  ['research', 'Research'],
  ['related_items', 'Related items'],
];

function hasValue(value) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return typeof value === 'string'
    ? value.trim().length > 0
    : value != null && value !== false;
}

function escapeTemplateLiteral(value) {
  return String(value)
    .replaceAll('\\', '\\\\')
    .replaceAll('`', '\\`')
    .replaceAll('${', '\\${');
}

function formatTemplateProp(name, value) {
  return `  ${name}={\`${escapeTemplateLiteral(value)}\`}`;
}

function formatTitleProp(name, value) {
  return `  ${name}={\`${escapeTemplateLiteral(value)}\`}`;
}

function indentBlock(value, indent = '  ') {
  return String(value)
    .trim()
    .split('\n')
    .map((line) => `${indent}${line}`)
    .join('\n');
}

function buildVariation(variation) {
  const lines = ['<Variation'];

  if (hasValue(variation.variation_name)) {
    lines.push(formatTitleProp('title', variation.variation_name));
  }
  if (hasValue(variation.variation_description)) {
    lines.push(
      formatTemplateProp('description', variation.variation_description),
    );
  }
  if (hasValue(variation.variation_code_snippet)) {
    lines.push(formatTemplateProp('code', variation.variation_code_snippet));
  }
  if (hasValue(variation.variation_code_snippet_rendered)) {
    lines.push(
      formatTemplateProp(
        'renderedCode',
        variation.variation_code_snippet_rendered,
      ),
    );
  }
  if (hasValue(variation.variation_jinja_code_snippet)) {
    lines.push(
      formatTemplateProp('jinja', variation.variation_jinja_code_snippet),
    );
  }
  if (hasValue(variation.variation_implementation)) {
    lines.push(
      formatTemplateProp('implementation', variation.variation_implementation),
    );
  }
  if (hasValue(variation.variation_specs)) {
    lines.push(formatTemplateProp('specs', variation.variation_specs));
  }
  if (variation.variation_is_deprecated) {
    lines.push('  deprecated');
  }

  lines.push('/>');
  return lines.join('\n');
}

function buildVariationGroup(group) {
  const lines = ['<VariationGroup'];

  if (hasValue(group.variation_group_name)) {
    lines.push(formatTitleProp('title', group.variation_group_name));
  }
  if (hasValue(group.variation_group_description)) {
    lines.push(
      formatTemplateProp('description', group.variation_group_description),
    );
  }

  lines.push('>');

  for (const variation of group.variations || []) {
    lines.push(indentBlock(buildVariation(variation)));
    lines.push('');
  }

  if (lines.at(-1) === '') {
    lines.pop();
  }

  lines.push('</VariationGroup>');
  return lines.join('\n');
}

function buildSection(title, body) {
  return `<Section title={\`${escapeTemplateLiteral(title)}\`}>
${indentBlock(body)}
</Section>`;
}

function buildRestrictionsSection(restrictions) {
  const pairs = [];

  for (const restriction of restrictions || []) {
    const lines = ['<GuidancePair'];

    if (hasValue(restriction.restrictions_do)) {
      lines.push(formatTemplateProp('doText', restriction.restrictions_do));
    }
    if (hasValue(restriction.restrictions_do_not)) {
      lines.push(
        formatTemplateProp('dontText', restriction.restrictions_do_not),
      );
    }

    lines.push('/>');
    pairs.push(lines.join('\n'));
  }

  if (!pairs.length) {
    return '';
  }

  return `<Section title={\`Restrictions\`}>
${indentBlock(pairs.join('\n\n'))}
</Section>`;
}

export function buildStorybookMdxBody(data) {
  const blocks = [];

  for (const group of data.variation_groups || []) {
    blocks.push(buildVariationGroup(group));
  }

  // These sections intentionally mirror the existing Jekyll page authoring
  // model so Decap can keep a structured editorial UI while Storybook still
  // stores a single MDX document per page.
  for (const [fieldName, title] of SECTION_DEFINITIONS) {
    if (fieldName === 'restrictions') {
      const restrictionsSection = buildRestrictionsSection(
        data.restrictions || [],
      );
      if (restrictionsSection) {
        blocks.push(restrictionsSection);
      }
      continue;
    }

    if (hasValue(data[fieldName])) {
      blocks.push(buildSection(title, data[fieldName]));
    }
  }

  return blocks.join('\n\n').trim();
}

export function normalizeStorybookContentData(value) {
  if (value == null) {
    return '';
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .map(normalizeStorybookContentData)
      .filter((item) => item !== '');
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === 'object') {
    if (typeof value.toJS === 'function') {
      return normalizeStorybookContentData(value.toJS());
    }

    if (typeof value.toISOString === 'function') {
      return value.toISOString();
    }

    if (typeof value.toDate === 'function') {
      return value.toDate().toISOString();
    }

    if (typeof value.value === 'string') {
      return value.value;
    }

    if (typeof value.date === 'string') {
      return value.date;
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        normalizeStorybookContentData(nestedValue),
      ]),
    );
  }

  return String(value);
}
