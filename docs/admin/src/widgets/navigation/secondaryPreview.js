import React from 'react';

export const Preview = props => {

  window.previewProps = props;
  window.previewReact = React;

  let secondaryList = null;
  let sections = null;

  props.widgetsFor( 'sections' ).map( section => {
    const secondaryNavItems = section.getIn( [ 'widgets', 'secondaryNavItems' ] );
    React.Children.forEach( secondaryNavItems.props.children, secondaryNavItem => {
      const item = JSON.stringify( secondaryNavItem.props.value );
      secondaryList += item;
      console.log( item );
    } );
  } );


  // return (
  //   var children = items.map(item => <span key={item.title} />);
  //   <div>{children}</div>
  // );
  return h('div', {},
    h('div', {"className": "sections"}, sections),
    h('div', {"className": "secondary-nav-items"}, secondaryList)
  );
};
