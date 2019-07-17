import React from 'react';

export const Preview = props => {

  window.previewProps = props;
  window.previewReact = React;

  props.widgetsFor( 'sections' ).map( section => {
    const secondaryNavItems = section.getIn( [ 'widgets', 'secondaryNavItems' ] );
    React.Children.forEach( secondaryNavItems.props.children, secondaryNavItem => {
      console.log( JSON.stringify( secondaryNavItem.props.value ) );
    } );
  } );

  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;└ (2nd level)
    </div>
  );
};
