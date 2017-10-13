import React from 'react';
import {Meteor} from 'meteor/meteor';

import {Links} from './../api/links.js';
import LinksList from './linksList';
import PrivateHeader from './PrivateHeader';

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
        <PrivateHeader title="Secure logout page for the CMTAC"/>
        <LinksList />
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
