import React from 'react';

const siteURL = 'https:\/\/cfpb.github.io/design-system/';

export const Preview = props => <a href={ siteURL + props.value }>{ props.value }</a>;
