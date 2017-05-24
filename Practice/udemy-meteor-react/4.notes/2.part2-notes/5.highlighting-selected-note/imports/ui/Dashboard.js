import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import {Session} from 'meteor/session';

export default class Link extends React.Component{

  //////take page back if no auth/////
  componentWillMount(){
    if(!Meteor.userId()) {
        this.props.history.replace('/');
      }else {
      Session.set('selectedNoteId', this.props.match.params.id);
    }
  };//////////////////////////////////

  render(){
    return(
      <div>
        <PrivateHeader title="Dashboard" />
        <div className="page-content">
          <NoteList />
        </div>
      </div>
    );
  }
}
