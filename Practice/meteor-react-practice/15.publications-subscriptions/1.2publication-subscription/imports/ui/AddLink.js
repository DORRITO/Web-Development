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
        isOpen: false   //
      };                //
  }///////////////////////

  //////////////////////////////
  onSubmit(e){
    //const url = this.state.url
    const {url} = this.state; //same thing
    e.preventDefault();

    if(url){
      Meteor.call('links.insert', url, (err, res) => {
        if (!err){
          this.setState({ url: '', isOpen: false });
        }
      });
    }
  }///////////////////////////////

  ///////need onchange if you use a vlue field in the input, or it wont let you type////////////
  onChange(e){
    this.setState({
      url: e.target.value
    });
  }//////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <button onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
        <Modal isOpen={this.state.isOpen} contentLable="Add link">
          <p>Add Link</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" ref="url" placeholder="URL" value={this.state.url} onChange={this.onChange.bind(this)} />
            <button>Add Link</button>
          </form>
          <button onClick={() => this.setState({isOpen: false, url: ''})}>Close</button>
        </Modal>
      </div>
    )
  }
}
