import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import {
  TOGGLE_ATTRIBUTE,
  toggleDetails,
} from '../../../../assets/js/toggle-details.js';
import Tabs from '../../../../assets/js/tabs.js';
import { encode } from 'html-entities';
import slugify from 'slugify';
import template from '../../../../_includes/variation-content.html';

import { marked } from '../../../../../node_modules/marked/lib/marked.esm.js';

// react-liquid (https://github.com/aquibm/react-liquid/) isn't able to `include` other files so we
// replace instances of {% include icons/XXXXX.svg %} with the inlined SVG
const templateWithIcons = template.replace(
  /{%\s+include\s+\/?icons\/([\w-]+)\.svg\s+%}/g,
  (match, icon) => import(`../../../../_includes/icons/${icon}.svg`),
);

export default class Preview extends Component {
  constructor(props) {
    super(props);

    const { document } = this.props;
    const script = document.createElement('script');
    script.src = '../dist/admin/main-preview.js';
    document.head.appendChild(script);

    liquidEngine.registerFilter('slugify', (initial) =>
      slugify(initial || '', { lower: true }),
    );
    liquidEngine.registerFilter('xml_escape', (initial) => encode(initial));
    liquidEngine.registerFilter('markdownify', (initial) =>
      marked.parse(initial || ''),
    );
    liquidEngine.registerFilter(
      'strip',
      (initial) => initial && initial.trim(),
    );

    this.containerRef = React.createRef();
  }

  /**
   * @param {MouseEvent} event - The mouse event object from the click.
   */
  handleClick(event) {
    const target = event.target;
    if (target.matches(`[${TOGGLE_ATTRIBUTE}]`)) {
      event.preventDefault();
      toggleDetails(target, this.containerRef.current);

      const tabsContainerDom = this.props.document.querySelectorAll(
        `.${Tabs.BASE_CLASS}`,
      );
      if (tabsContainerDom.length > 0) {
        let tabsInst;
        for (let i = 0, len = tabsContainerDom.length; i < len; i++) {
          tabsInst = new Tabs(tabsContainerDom[i]);
          tabsInst.init();
        }
      }
    }
  }

  render() {
    const data = {
      page: this.props.entry.toJS().data,
    };
    return (
      // TODO: We're breaking some a11y here by making the whole page clickable.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div ref={this.containerRef} onClick={(event) => this.handleClick(event)}>
        <ReactLiquid template={templateWithIcons} data={data} html />
      </div>
    );
  }
}

Preview.propTypes = {
  entry: PropTypes.object,
  document: PropTypes.node,
};
