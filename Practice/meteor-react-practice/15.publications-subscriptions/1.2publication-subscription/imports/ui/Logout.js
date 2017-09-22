import React from 'react';
import {Meteor} from 'meteor/meteor';

import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink'

export default class Logout extends React.Component{

  //////////////////////////////
  onSubmit(e){
    const url = this.refs.url.value.trim();
    e.preventDefault();

    if(url){
      Meteor.call('links.insert', url);
      //Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }///////////////////////////////

  render(){
    return(
      <div>
        <PrivateHeader title="Your links from Logout!"/>
        <AddLink />
        <LinksList />
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
