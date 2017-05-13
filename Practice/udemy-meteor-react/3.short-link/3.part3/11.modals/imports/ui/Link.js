import React from 'react';

import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default class Link extends React.Component{

  //////take page back if no auth/////
  componentWillMount(){
    if(!Meteor.userId()) {
        this.props.history.replace('/');
      }
  }//////////////////////////////////

  render(){
    return(
      <div>
        <PrivateHeader title="Your links" />
        <LinksListFilters />
        <LinksList key='this-key'/>
        <AddLink />
      </div>
    );
  }
}
