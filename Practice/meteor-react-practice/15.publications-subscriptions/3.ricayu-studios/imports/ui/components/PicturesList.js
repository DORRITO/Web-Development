import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {PicturesAPI} from './../../api/picturesAPI';

export default class PicturesList extends React.Component{

  ////////////////////////
    constructor(props){   //
      super(props)        //
        this.state = {    //
          pictures: []       //
        };                //
    }///////////////////////

    //////////////////////////////////////
    componentDidMount(){
      this.picturesTracker = Tracker.autorun(() => {
        //subscribe/get the publication named links that you created.  which gets the api data
        Meteor.subscribe('picturesAPI');
        const pictures = PicturesAPI.find().fetch();
        this.setState({ pictures });
      });
    }//////////////////////////////////////

    //////////////////////////////////////
    componentWillUnmount(){
      this.linksTracker.stop();
    }//////////////////////////////////////

    //////////////////////////////////////
    renderPicturesListItems(){
      return this.state.pictures.map((picture) => {
        return <p key={picture._id}>{picture.url}</p>
      });
    }//////////////////////////////////////

    ////////////////////////////////////////////////
    render(){
      return(
        <div>
          <p>Pictures List</p>
          <div>{this.renderPicturesListItems()}</div>
        </div>
      )
    }///////////////////////////////////////////////
}
