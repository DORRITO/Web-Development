import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';

import PicturesAPI from './../api/picturesAPI';
import {PicturesList} from './components/PicturesList';

export default class MyPage extends React.Component{

  /////////////////////
  onLogout(){
    Accounts.logout();
  }////////////////////

  //////////////////////////////
  onSubmit(e){
    const picture = this.refs.picture.value.trim();
    e.preventDefault();

    if(picture){
      Meteor.call('picturesAPI.insert', picture);
      //Links.insert({ url, userId: Meteor.userId() });
      this.refs.picture.value = '';
    }
  }///////////////////////////////

  ////////////////////////////////
  render(){
    return(
      <div>
        <h1>This is the account page</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <PicturesList />
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="picture" placeholder="Picture name" />
          <button>Add Picture</button>
        </form>
        <p><Link to="/login">login</Link></p>
        <p><Link to="/signup">signup</Link></p>
      </div>
    );
  }//////////////////////////////////
}
