import React from 'react';

import {Link} from 'react-router';

export default class Navigation extends React.Component{

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>Navigation</h1>
        <Link to="/about">about</Link> &nbsp;
        <Link to="/account">account</Link> &nbsp;
        <Link to="/gallery">gallery</Link> &nbsp;
        <Link to="/main">main</Link> &nbsp;
        <Link to="/login">login</Link> &nbsp;
        <Link to="/signup">signup</Link>
      </div>
    );
  }//////////////////////////////////
}
