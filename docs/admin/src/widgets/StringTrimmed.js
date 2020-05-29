import React from 'react';
import PropTypes from 'prop-types';

export default class StringTrimmedControl extends React.Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.value || ''
  };

  handleChange(event) {
    this.props.onChange( event.target.value.trim() );
    this.setState( { value: event.target.value } );
  };

  render() {
    const {
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={this.state.value}
        onChange={event => this.handleChange( event )}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    );
  }
}
