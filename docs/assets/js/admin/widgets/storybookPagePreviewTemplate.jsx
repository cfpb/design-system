import PropTypes from 'prop-types';
import React from 'react';
import { SitePage } from '../../../../../storybook/components/SitePage';
import { createContentEntry } from '../../../../../storybook/lib/content';
import {
  buildStorybookMdxBody,
  normalizeStorybookContentData,
} from '../../../../../storybook/lib/structured-content';

export default function StorybookPagePreview({ entry }) {
  const data = normalizeStorybookContentData(entry.toJS().data);
  const { body = '', ...frontmatter } = data;
  const generatedBody = buildStorybookMdxBody(data) || body;
  // Decap preview entries use Immutable data and widget-specific value wrappers.
  // Normalize them into the same plain object shape that the Storybook page
  // renderer expects and generate the MDX body from the structured field model
  // so preview matches the content that will be saved to disk.
  const previewEntry = createContentEntry(
    frontmatter,
    generatedBody,
    `storybook/content/pages/${frontmatter.slug || 'preview'}.mdx`,
  );

  return <SitePage entry={previewEntry} mode="cms-preview" />;
}

StorybookPagePreview.propTypes = {
  entry: PropTypes.object,
};
