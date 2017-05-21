import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

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
        <PrivateHeader title="Dashboard" />
        <div className="page-content">
          <NoteList />
        </div>
      </div>
    );
  }
}
