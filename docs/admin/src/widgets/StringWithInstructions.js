import React from 'react';
import PropTypes from 'prop-types';

const instructionsContainerStyle = {
  color: '#444a57',
  padding: '20px 0 10px',
};

const instructionsLinkStyle = {
  color: '#444a57',
  'font-size': '16px',
  'font-weight': 'normal',
  'text-decoration': 'underline',
};

export const StringWithInstructionsControl = ({
  onChange,
  forID,
  value,
  classNameWrapper,
  setActiveStyle,
  setInactiveStyle,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value.trim());
  };

  return (
    <div>
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value}
        onChange={handleChange}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
      <div style={instructionsContainerStyle}>
        Need help? Check out our guide on&nbsp;
        <a
          href="/design-system/updating-this-website/"
          target="_blank"
          rel="noopener noreferrer"
          style={instructionsLinkStyle}
        >
          how to use this CMS
        </a>
        .
      </div>
    </div>
  );
};

StringWithInstructionsControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};
