import React from 'react';

export default class Cat extends React.Component{

  render(){
    return(
      <div>
        <a href={this.props.catPic} target="_blank" alt="cat picture">{this.props.message}</a>
      </div>
    );
  }
};
