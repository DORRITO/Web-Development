import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends React.Component{
  ////////////////////////
  constructor(props){   //
    super(props)        //
      this.state = {    //
        url: 'Andrew was here'       //
      };                //
  }///////////////////////

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

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" value={this.state.url}/>
          <button>Add Link</button>
        </form>
      </div>
    )
  }
}
