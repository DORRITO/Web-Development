import React from 'react';
import PropTypes from 'prop-types';
import {Names} from './../api/lists';

export default class AddName extends React.Component{
  handleSubmit(e) {
    let nameName = e.target.nameName.value;
    //doesnt let page reload
    e.preventDefault();

    if (nameName){
      e.target.nameName.value = '';
      Names.insert({
        name: nameName
      });
    }
  }
  //////////////////////////////////////////////////
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="nameName" placeholder="Add name" />
          <button>Add Name</button>
        </form>
      </div>
    );
  }
};
