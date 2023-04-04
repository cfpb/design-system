import React from 'react';
import PropTypes from 'prop-types';

export const StringTrimmedControl = ({
  onChange,
  forID,
  value,
  classNameWrapper,
  setActiveStyle,
  setInactiveStyle,
}) => {
  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={setActiveStyle}
      onBlur={(e) => {
        e.target.value.trim();
        setInactiveStyle();
      }}
    />
  );
};

StringTrimmedControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.string,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};
