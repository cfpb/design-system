import React from 'react';
import PropTypes from 'prop-types';

export default function StringTrimmedControl({
  onChange,
  forID,
  value,
  classNameWrapper,
  setActiveStyle,
  setInactiveStyle,
}) {
  const [inputValue, setInputValue] = React.useState(value || '');

  const handleChange = (event) => {
    onChange(event.target.value.trim());
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={inputValue}
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
