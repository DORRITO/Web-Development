import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Modifer extends React.Component{
  ///////////////////////
  constructor(props){
    super(props);
      this.state = {
        modifier: 0
    }
  }/////////////////////

  /////////show modifier input the user the gm////////
  isGM(){
    onChange = (event) => {this.setState({modifier: event.target.value})}

    if (Meteor.userId() === 'y7aACCi9zEYNc6g2p') {
      const modInput = <input type="number" ref="modInput" name="modInput" placeholder={0} onChange={onChange}/>
      return <div>{modInput}</div>
    }
  }///////////////////////////////////////////////

  render(){
    return(
      <div>
        {this.isGM()}
      </div>
    );
  }
};
