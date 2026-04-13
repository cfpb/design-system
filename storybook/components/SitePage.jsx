import AnchorJS from 'anchor-js';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Tabs from '../../docs/assets/js/tabs.js';
import {
  TOGGLE_ATTRIBUTE,
  toggleAllDetails,
  toggleDetails,
} from '../../docs/assets/js/toggle-details.js';
import { extractJumpLinks, slugifyValue } from '../lib/content';
import { buildAdminEntryUrl, buildIssueUrl } from '../lib/edit-links';
import { compileMdxBody } from '../lib/mdx-runtime';
import { renderMarkdown } from '../lib/markdown';
import { initStorybookDesignSystem } from '../lib/init-web-components.js';
import { mdxComponents } from './SiteBlocks';

function GlobalEyebrow() {
  return (
    <div className="m-global-eyebrow">
      <div className="a-tagline">
        <span className="u-usa-flag" />
        <div>
          An official website of the{' '}
          <span className="u-nowrap">United States government</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header role="banner" className="site-header-wrapper">
      <GlobalEyebrow />
      <div className="site-header">
        <h1 className="title">
          <a className="title-link" href="/design-system/">
            <span className="demi">CFPB</span> Design System
          </a>
        </h1>
      </div>
    </header>
  );
}

function RedirectBanner() {
  return (
    <div
      id="redirect-banner"
      className="block block--flush-top block--flush-bottom block--padded-top u-hidden"
    />
  );
}

function Footer({ entry }) {
  return (
    <footer className="ds-footer" role="contentinfo">
      <hr />
      <div className="block block--sub ds-footer__content">
        <p>
          We need your help keeping the Design System accurate and up-to-date!
          If you see something wrong or missing,{' '}
          <a href={buildAdminEntryUrl(entry)}>edit the page</a>. If you can’t
          make those changes yourself,{' '}
          <a href={buildIssueUrl(entry)}>file an issue</a>.
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  entry: PropTypes.object.isRequired,
};

function PageDescription({ description }) {
  if (!description) {
    return null;
  }

  return (
    <section
      id="description"
      className="u-mb30"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(description) }}
    />
  );
}

PageDescription.propTypes = {
  description: PropTypes.string,
};

export function SitePage({ entry, mode = 'storybook' }) {
  const containerRef = useRef(null);
  const [Content, setContent] = useState(null);
  const [error, setError] = useState(null);

  const jumpLinks = useMemo(() => extractJumpLinks(entry.body), [entry.body]);
  const hasVariations = entry.body.includes('<Variation');

  useEffect(() => {
    let cancelled = false;

    compileMdxBody(entry.body)
      .then((component) => {
        if (!cancelled) {
          setContent(() => component);
        }
      })
      .catch((compileError) => {
        if (!cancelled) {
          setError(compileError);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [entry.body]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !Content) {
      return undefined;
    }

    initStorybookDesignSystem(container);

    const anchorInstance = new AnchorJS();
    anchorInstance.add(
      '.ds-content h2:not(.title), .ds-content h3, .ds-content h4, .ds-content h5',
    );
    anchorInstance.remove(
      '.a-live__code h2, .a-live__code h3, .a-live__code h4, .a-live__code h5',
    );

    const tabs = Array.from(
      container.querySelectorAll(`.${Tabs.BASE_CLASS}`),
      (dom) => new Tabs(dom).init(),
    );

    const handleContainerClick = (event) => {
      const toggleTarget = event.target.closest(`[${TOGGLE_ATTRIBUTE}]`);
      if (toggleTarget) {
        event.preventDefault();
        toggleDetails(toggleTarget, container);
      }
    };

    const toggleAllButton = container.querySelector('#toggle-details');
    const handleToggleAllClick = (event) => {
      event.preventDefault();
      toggleAllDetails(toggleAllButton);
    };

    container.addEventListener('click', handleContainerClick);
    toggleAllButton?.addEventListener('click', handleToggleAllClick);

    return () => {
      tabs.length = 0;
      container.removeEventListener('click', handleContainerClick);
      toggleAllButton?.removeEventListener('click', handleToggleAllClick);
    };
  }, [Content]);

  return (
    <div ref={containerRef}>
      <div className="skip-nav">
        <a className="skip-nav__link" href="#main">
          Skip to main content
        </a>
      </div>

      <Header />
      <RedirectBanner />

      <main id="main" role="main" className="main--storybook">
        <div className="ds-content">
          {entry.frontmatter.eyebrow ? (
            <div className="h5">{entry.frontmatter.eyebrow}</div>
          ) : null}

          <h1 className="component-header u-mb30">{entry.frontmatter.title}</h1>

          {jumpLinks.length ? (
            <ul className="m-list m-list--horizontal m-list--horizontal-spaced">
              {jumpLinks.map((jumpLink) => (
                <li className="m-list__item" key={jumpLink}>
                  <a href={`#${slugifyValue(jumpLink)}`}>{jumpLink}</a>
                </li>
              ))}
            </ul>
          ) : null}

          <PageDescription description={entry.frontmatter.description} />

          {Content ? (
            <Content components={mdxComponents} />
          ) : error ? (
            <pre>{String(error)}</pre>
          ) : (
            <p>Loading preview…</p>
          )}

          {entry.frontmatter.last_updated ? (
            <section className="content-l u-mb45">
              <div className="content-l__col content-l__col-1">
                <section>
                  <h2 id="latest-updates">Latest updates</h2>
                  <div className="content__line--wide content__line u-mb20" />
                  <strong>Page last edited:</strong>{' '}
                  <time dateTime={entry.frontmatter.last_updated}>
                    {entry.frontmatter.last_updated}
                  </time>
                </section>
              </div>
            </section>
          ) : null}

          {hasVariations ? (
            <div className="o-editor" id="toggle-details">
              <a className="a-btn" href="#" title="Show all details">
                <span>Show all details</span>
              </a>
            </div>
          ) : null}

          {mode !== 'cms-preview' ? (
            <div className="o-editor" id="edit-page">
              <a
                className="a-btn"
                href={buildAdminEntryUrl(entry)}
                title="Edit this page in Decap CMS"
              >
                <span>Edit page</span>
              </a>
            </div>
          ) : null}
        </div>
      </main>

      <Footer entry={entry} />
    </div>
  );
}

SitePage.propTypes = {
  entry: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['storybook', 'cms-preview']),
};
