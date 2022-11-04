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
  const handleChange = (event) => {
    onChange(event.target.value.trim());
  };

  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={value}
      onChange={handleChange}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
    />
  );
}

StringTrimmedControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.string,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};
