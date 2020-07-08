import React from 'react';
import PropTypes from 'prop-types';

const instructionsContainerStyle = {
  'color': '#444a57',
  'padding': '20px 0 10px'
};

const instructionsLinkStyle = {
  'color': '#444a57',
  'font-size': '16px',
  'font-weight': 'normal',
  'text-decoration': 'underline'
};

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
      <div>
        <input
          type='text'
          id={forID}
          className={classNameWrapper}
          value={this.state.value}
          onChange={event => this.handleChange( event )}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
        />
        <div style={instructionsContainerStyle}>
          Need help? Check out our guide on&nbsp;
          <a href='/design-system/updating-this-website/' target='_blank' style={instructionsLinkStyle}>
            how to use this CMS
          </a>.
        </div>
      </div>
    );
  }
}
