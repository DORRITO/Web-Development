import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import {Links} from '../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component{

  //////take page back if no auth/////
  componentWillMount(){
    if(!Meteor.userId()) {
        this.props.history.replace('/');
      }
  }//////////////////////////////////

  /////////////////////
  onLogout() {
    Accounts.logout();
  }///////////////////

  ////////////send url///////////////////////
  onSubmit(e){
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if(url) {
      Meteor.call('links.insert', url);
      // Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }/////////////////////////////////////////

  render(){
    return(
      <div>
        <h1>Your links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <LinksList key='this-key'/>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref='url' placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
