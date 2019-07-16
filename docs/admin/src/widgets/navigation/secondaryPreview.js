import React from 'react';

// export const Preview = props => <div>
//     &nbsp;&nbsp;&nbsp;&nbsp;└ {props.value}
// </div>;


export const Preview = props => {
  
  const entry = props.entry;
  var navigationWTF = entry.getIn(['data', 'navigation']);
  const linkText = entry.getIn(['section', 'secondaryNavLink', 'label']);
  console.log( 'porps' );
  console.log( props.entry );
  // console.log( linkText );
  window.cats = entry;

  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;└ { linkText } (2nd level)
    </div>
  );
};
