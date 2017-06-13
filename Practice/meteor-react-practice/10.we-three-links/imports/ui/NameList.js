import React from 'react';
import PropTypes from 'prop-types';
/////////////////////////////
import Name from './Name'

export default class NameList extends React.Component {
  renderNames() {
    if (this.props.names.length === 0) {
      return <p>Please add a name!</p>
    } else {
      return this.props.names.map((name) => {
        return <Name key={name._id} name={name}/>;
      });
    }
  }
  render() {
    return(
      <div>
        {this.renderNames()}
      </div>
    );
  }
};
///////////////////////////////////
NameList.PropTypes = {
  names: PropTypes.array.isRequired
}
