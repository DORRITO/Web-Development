import React from 'react';

import {Link} from 'react-router';
import overHere from './overHere';
import Bing from './bing';

export default class Hello extends React.Component{
  render(){
    return(
      <div>
        <Link to="/overhere"><h2>hiiiii</h2></Link>
        <Link to="/"><h2>over here!</h2></Link>
        <Bing />
      </div>
    )
  }
};
