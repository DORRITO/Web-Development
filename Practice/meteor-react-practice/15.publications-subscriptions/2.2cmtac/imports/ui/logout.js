import React from 'react';

import {Links} from './../api/links.js';
import LinksList from './linksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default class Logout extends React.Component{

  render(){
    return(
      <div>
        <PrivateHeader title="Secure logout page for the CMTAC"/>
        <AddLink />
        <LinksList />
      </div>
    );
  }
}
