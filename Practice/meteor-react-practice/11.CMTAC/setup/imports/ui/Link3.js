import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

export default class Link3 extends React.Component{
  onLogout(){
    browserHistory.push('/');
  }
  render() {
      return(
        <div>
          <p>Link3</p>
          <button onClick={this.onLogout.bind(this)}>Back to the main page</button>
        </div>
      );
  }
};
