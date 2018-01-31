import React from 'react';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

export class Chat extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      text: '',
      nextId: 0,
      chatList: [{from:'adasd', text:'moooofasaa', createdAt: 1}, {from:'adasd222', text:'moooofasaa3333', createdAt: 2}]
    };
  }
  
  componentDidMount(){
    // socket.on('newMessage', 
    //     // function(message){
    //     // console.log({...message})
    //     // console.log(this.state.chatList, 'hooodalaka')
    //     // let newArray = this.state.chatList.slice();
    //     // newArray.push({...message});
    //     // this.setState({chatList: this.state.chatList.push({...message}) });
    //     // console.log({newArray}, 'hhwahhhchaa')
    //     // this.state.chatList.push({...message});
    // );
  }
//   updateChat(){console.log('ahsdjdklajksdakjsd')}
  ///////////updates text change//////////
  onTextChange(e){
    this.setState({text: e.target.value});
  }////////////////////////////////////////

  ////////////////////////map throw chat state////////////////////////
  renderChatList() {
    return this.state.chatList.map((chatItem) => {
        return <li key={chatItem.createdAt}>from: {chatItem.from}</li>
    });
  }///////////////////////////////////////////////////////////////////

  ///////////////////////////roll///////////////////////////////////////
   send(e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'user',
        text: this.state.text
    }, function(){});
  }///////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  render(){
      return (
        <div>
          <form onSubmit={this.send.bind(this)}>
            <input type="text" onChange={this.onTextChange.bind(this)} placeholder="message"/>
            <button >Send chat</button>
          </form>
          <ul>{this.renderChatList()}</ul>
        </div>
      )
  }/////////////////////////////////////////////////////////////////////////////
};