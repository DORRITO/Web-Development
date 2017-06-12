import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h1>{this.props.subtitle}</h1>
    }
  }

  render() {
    return(
      <div>
        {this.renderSubtitle()}
      </div>
    );
  }
}
///////////////////////////////////////////
TitleBar.propTypes = {
  subtitle: PropTypes.string
};
