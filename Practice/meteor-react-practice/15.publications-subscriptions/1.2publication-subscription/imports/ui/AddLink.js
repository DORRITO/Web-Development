import React from 'react';
import Modal from 'react-modal';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends React.Component{
  ////////////////////////
  constructor(props){   //
    super(props)        //
      this.state = {    //
        url: ''         //
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
          this.setState({ url: ''});
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
        <Modal isOpen={true} contentLable="Add link">
          <p>Add Link</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" ref="url" placeholder="URL" value={this.state.url} onChange={this.onChange.bind(this)} />
            <button>Add Link</button>
          </form>
        </Modal>
      </div>
    )
  }
}
