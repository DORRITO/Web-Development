import React from 'react';
import PropTypes from 'prop-types';

import {Names} from './../api/lists';

export default class Name extends React.Component{
  render() {
      return(
        <p key={this.props.name._id}>
          {this.props.name.name}
          <button onClick={() => Names.remove(this.props.name._id)}>delete</button>
        </p>
      );
  }
};
//////////////////////////
Name.propTypes = {
  name: PropTypes.object.isRequired
}
