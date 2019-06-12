import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <textarea
        id={forID}
        className={classNameWrapper}
        onChange={e => onChange(e.target.value)}
      >{value || ''}</textarea>
    );
  }
}
