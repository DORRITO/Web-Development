import React from 'react';
//meteor npm install react-modal --save
import Modal from 'react-modal';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends React.Component{
  ////////////////////////
  constructor(props){   //
    super(props)        //
      this.state = {    //
        url: '',        //
        isOpen: false,  //
        error: ''       //
      };                //
  }///////////////////////

  //////////////////////////////
  onSubmit(e){
    //const url = this.state.url
    const {url} = this.state; //same thing
    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
      if (!err){
        this.handleModalClose();
      } else {
        this.setState({ error: err.reason });
      }
    });
  }///////////////////////////////

  ///////need onchange if you use a vlue field in the input, or it wont let you type////////////
  onChange(e){
    this.setState({
      url: e.target.value
    });
  }//////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////
  handleModalClose() {
    this.setState({
      isOpen: false,
      url: '',
      error: ''
    });
  }///////////////////

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
        <Modal isOpen={this.state.isOpen}
               contentLable="Add link"
               onAfterOpen={() => this.refs.url.focus()} //puts mouse on input
               onRequestClose={this.handleModalClose.bind(this)}
               className="boxed_view__box"
               overlayClassName="boxed-view boxed-view--modal">
          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
            <input type="text"
                   ref="url"
                   placeholder="URL"
                   value={this.state.url}
                   onChange={this.onChange.bind(this)} />
            <button className="button">Add Link</button>
          </form>
          <button className="button" onClick={this.handleModalClose.bind(this)}>Close</button>
        </Modal>
      </div>
    )
  }
}
