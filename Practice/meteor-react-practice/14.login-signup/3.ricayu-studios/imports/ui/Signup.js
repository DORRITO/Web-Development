import React from 'react';

export default class Signup extends React.Component{

  ////////////////////
  constructor(props){
    super(props);
    this.state ={
      error: ''
    };
  }////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>This is the Signup page</h1>
      </div>
    );
  }//////////////////////////////////
}
