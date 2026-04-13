import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { getExampleMarkup } from '../lib/examples';
import {
  getInlineIconSvg,
  replaceLegacyIconIncludes,
  renderLegacyIconSnippet,
} from '../lib/icons';
import { renderMarkdown } from '../lib/markdown';

function slugifyId(value) {
  return slugify(value, { lower: true, strict: true });
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function markdownMarkup(value) {
  return { __html: renderMarkdown(value) };
}

function htmlMarkup(value) {
  return { __html: value };
}

export function InlineIcon({ name }) {
  return (
    <span
      dangerouslySetInnerHTML={htmlMarkup(getInlineIconSvg(name))}
      aria-hidden="true"
    />
  );
}

InlineIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export function VariationGroup({ title, description, children }) {
  return (
    <section
      className="o-variation-group"
      id={title ? slugifyId(title) : undefined}
    >
      {title ? (
        <h2 className="o-variation-group__title">{title}</h2>
      ) : (
        <div className="u-mb15" />
      )}
      {description ? (
        <div
          className="o-variation-group__description"
          dangerouslySetInnerHTML={markdownMarkup(description)}
        />
      ) : null}
      {children}
    </section>
  );
}

VariationGroup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export function Variation({
  title,
  description,
  code,
  renderedCode,
  implementation,
  jinja,
  specs,
  deprecated,
}) {
  const liveMarkup = replaceLegacyIconIncludes(renderedCode || code || '');
  const hasDetails = Boolean(code || implementation || jinja || specs);
  const variationSlug = slugifyId(
    `${title}-${description}-${code}-${implementation}-${jinja}-${specs}`,
  ).slice(0, 40);

  return (
    <div className="m-variation">
      {title ? (
        <div className="m-variation__name">
          <h3>
            {title}
            {deprecated ? (
              <span className="m-variation__deprecated">DEPRECATED</span>
            ) : null}
          </h3>
        </div>
      ) : null}

      {description ? (
        <div
          className="m-variation__description"
          dangerouslySetInnerHTML={markdownMarkup(description)}
        />
      ) : null}

      {liveMarkup ? (
        <div
          className="a-live__code"
          dangerouslySetInnerHTML={htmlMarkup(liveMarkup)}
        />
      ) : null}

      {hasDetails ? (
        <>
          <div className="a-toggle__code">
            <button
              href={`#${variationSlug}`}
              className="a-btn a-btn--link"
              data-toggle-details="show"
            >
              Show details
            </button>
            <button
              href={`#${variationSlug}`}
              className="a-btn a-btn--link u-hidden"
              data-toggle-details="hide"
            >
              Hide details
            </button>
          </div>

          <div className="m-tabs u-hidden" id={variationSlug}>
            <ul className="m-tabs__list">
              {code ? (
                <li className="m-tabs__list-item m-tabs__list-item-selected">
                  <a className="m-tabs__tab" href={`#${variationSlug}-html`}>
                    HTML code snippet
                  </a>
                </li>
              ) : null}
              {jinja ? (
                <li className="m-tabs__list-item">
                  <a className="m-tabs__tab" href={`#${variationSlug}-jinja`}>
                    Jinja code snippet
                  </a>
                </li>
              ) : null}
              {implementation ? (
                <li className="m-tabs__list-item">
                  <a
                    className="m-tabs__tab"
                    href={`#${variationSlug}-implementation`}
                  >
                    Implementation
                  </a>
                </li>
              ) : null}
              {specs ? (
                <li className="m-tabs__list-item">
                  <a className="m-tabs__tab" href={`#${variationSlug}-specs`}>
                    Specs
                  </a>
                </li>
              ) : null}
            </ul>

            {code ? (
              <section className="m-tabs__panel" id={`${variationSlug}-html`}>
                <div className="variation-code-snippet">
                  <h4 className="variation-code-snippet-title">
                    HTML code snippet
                  </h4>
                  <div className="source-code">
                    <pre>
                      <code
                        className="language-html"
                        dangerouslySetInnerHTML={htmlMarkup(
                          renderLegacyIconSnippet(code),
                        )}
                      />
                    </pre>
                  </div>
                </div>
              </section>
            ) : null}

            {jinja ? (
              <section className="m-tabs__panel" id={`${variationSlug}-jinja`}>
                <div className="variation-jinja-code-snippet">
                  <h4 className="variation-jinja-code-snippet-title">
                    Jinja code snippet
                  </h4>
                  <div className="source-code">
                    <pre>
                      <code
                        className="language-html"
                        dangerouslySetInnerHTML={htmlMarkup(
                          renderLegacyIconSnippet(jinja),
                        )}
                      />
                    </pre>
                  </div>
                </div>
              </section>
            ) : null}

            {implementation ? (
              <section
                className="m-tabs__panel"
                id={`${variationSlug}-implementation`}
              >
                <div>
                  <h4 className="variation-implementation-title">
                    Implementation details
                  </h4>
                  <div
                    style={{ padding: '40px' }}
                    dangerouslySetInnerHTML={markdownMarkup(implementation)}
                  />
                </div>
              </section>
            ) : null}

            {specs ? (
              <section className="m-tabs__panel" id={`${variationSlug}-specs`}>
                <div>
                  <h4 className="variation-specs-title">Specs</h4>
                  <div
                    style={{ padding: '40px' }}
                    dangerouslySetInnerHTML={markdownMarkup(specs)}
                  />
                </div>
              </section>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

Variation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  code: PropTypes.string,
  renderedCode: PropTypes.string,
  implementation: PropTypes.string,
  jinja: PropTypes.string,
  specs: PropTypes.string,
  deprecated: PropTypes.bool,
};

export function Section({ title, children }) {
  return (
    <section className="sticky-header u-mb45">
      <h2 id={slugifyId(title)}>{title}</h2>
      <div className="content__line content__line--wide u-mb20" />
      <div>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export function GuidancePair({ doText, dontText }) {
  return (
    <div className="content-l component-restrictions">
      {doText ? (
        <div className="content-l__col content-l__col-1-2">
          <div className="block block--flush-top block--flush-bottom block--padded-bottom">
            <header className="component-restrictions__heading-do">
              <h3>
                <InlineIcon name="approved-round" /> Do
              </h3>
            </header>
            <div dangerouslySetInnerHTML={markdownMarkup(doText)} />
          </div>
        </div>
      ) : null}
      {dontText ? (
        <div className="content-l__col content-l__col-1-2">
          <div className="block block--flush-top block--flush-bottom block--padded-bottom">
            <header className="component-restrictions__heading-donot">
              <h3>
                <InlineIcon name="error-round" /> Do not
              </h3>
            </header>
            <div dangerouslySetInnerHTML={markdownMarkup(dontText)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

GuidancePair.propTypes = {
  doText: PropTypes.string,
  dontText: PropTypes.string,
};

export function IncludeExample({ path, title }) {
  const markup = getExampleMarkup(path);

  return (
    <section className="u-mb45">
      {title ? <h2>{title}</h2> : null}
      <div dangerouslySetInnerHTML={htmlMarkup(markup)} />
    </section>
  );
}

IncludeExample.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export function Callout({ children }) {
  return <div className="o-well">{children}</div>;
}

Callout.propTypes = {
  children: PropTypes.node,
};

export const mdxComponents = {
  VariationGroup,
  Variation,
  Section,
  GuidancePair,
  InlineIcon,
  IncludeExample,
  Callout,
};
