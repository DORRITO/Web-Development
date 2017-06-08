import React from 'react';

export default class Box extends React.Component{
  /////////////////////////
  constructor(props) {
    super(props);
    this.state = {};
  }/////////////////////////

  render(){
    var flattenStyle = require('flattenStyle'),
    width = flattenStyle(this.props.style).width;
    console.log(width)
    return(
      <div ref="boxReference"></div>
    );
  }
};
