import React from 'react';

const siteURL = 'https:\/\/cfpb.github.io/design-system/';

export const Preview = props => <a href={ siteURL + props.value }>{ props.value }</a>;

// export const Preview = props => <a 
//   className="SecondaryNavLink"
//   href={props.secondaryNavLink.slug}
// >
// {props.secondaryNavLink.linkText}
// </a>
// ;
