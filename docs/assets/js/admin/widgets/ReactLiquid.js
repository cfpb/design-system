import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Liquid } from 'liquidjs';
import { marked } from 'marked';
import slugifyLib from 'slugify';
import { encode } from 'html-entities';

const engine = new Liquid({ dynamicPartials: false });

engine.registerFilter('size', (val) => (val ? val.length : 1));
engine.registerFilter('relative_url', (val) => `/design-system/${val}`);
engine.registerFilter('slugify', (val) => {
  if (typeof val !== 'string') return val;
  return slugifyLib(val, { lower: true, strict: true, trim: true });
});
engine.registerFilter('markdownify', (val) => {
  if (!val) return '';
  return marked.parse(val);
});

engine.registerFilter('xml_escape', (val) => {
  if (typeof val !== 'string') return val;
  return encode(val);
});

/**
 * @typedef {object} ReactLiquidProps
 * @property {string} template - Template ot render in component.
 * @property {Record<string, unknown>} data - Data to feed to the template.
 */

/**
 * Create a <ReactLiquid> component.
 * @param {ReactLiquidProps} props - Component properties.
 * @returns {React.ReactElement} Rendered component output.
 */
export default function ReactLiquid({ template, data }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    engine
      .parseAndRender(template, data)
      .then((rendered) => setHtml(rendered))
      .catch((err) => {
        console.error('Liquid rendering error:', err);
        setHtml('<p>Error rendering template</p>');
      });
  }, [template, data]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

ReactLiquid.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
