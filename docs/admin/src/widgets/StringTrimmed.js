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
  const [state, setState] = React.useState({ value: value || '' });

  const handleChange = (event) => {
    onChange(event.target.value.trim());
    setState({ value: event.target.value });
  };

  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={state.value}
      onChange={(event) => handleChange(event)}
      onFocus={setActiveStyle}
      onBlur={setInactiveStyle}
    />
  );
}

StringTrimmedControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};
