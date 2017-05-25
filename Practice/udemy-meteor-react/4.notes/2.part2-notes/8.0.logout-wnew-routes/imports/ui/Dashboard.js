import React from 'react';
import {Session} from 'meteor/session';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

export default class Link extends React.Component{
  //////set state/////////
  constructor(props) {
    super(props);
    this.state = {
      privacy: 'unauth',
      error: ''
    };
  }///////////////////////
  ///////////////take page back if no auth/////
  componentWillMount(){
    if(!Meteor.userId()) {
        this.props.history.replace('/');
      }else {
      Session.set('selectedNoteId', this.props.match.params.id);
      Session.set('currentPagePrivacy', this.state.privacy);
    }

  };/////////////////////////////////////////

  render(){
    return(
      <div>
        <PrivateHeader title="Dashboard" />
        <div className="page-content">
          <NoteList />
          <Editor />
        </div>
      </div>
    );
  }
}
