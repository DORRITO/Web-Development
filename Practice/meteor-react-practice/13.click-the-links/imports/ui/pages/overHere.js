import React from 'react';

import {Link} from 'react-router';

export default class OverHere extends React.Component{
  render(){
    return(
      <div>
        <Link to="/"><h2>over here!</h2></Link>
      </div>
    )
  }
};
