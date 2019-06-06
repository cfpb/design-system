import React from 'react';
import { ReactLiquid } from 'react-liquid'
import template from '../../../../_includes/variations.html';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variations_code: 'Loading...'
    }
  }
  componentDidMount() {
    const component = this.props.entry.get('slug');
    const code = `/design-system/components/${component}/src/${component}.example.html`;
    fetch(code)
      .then(res => res.text())
      .then(text => this.setState({ variations_code: text }))
  }
  render() {
    const { variations_code } = this.state;
    const data = {
      page: {
        variations: this.props.value
      },
      variations_code: variations_code
    };
    return <ReactLiquid template={template} data={data} html />;
  }
}
