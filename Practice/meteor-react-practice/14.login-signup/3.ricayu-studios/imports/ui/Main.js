import React from 'react';
import {Link} from 'react-router';

import Navigation from './Navigation';

export default class Main extends React.Component{

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>This is the main page</h1>
        <Navigation />
      </div>
    );
  }//////////////////////////////////
}
