import React from 'react';

import {Link} from 'react-router';

export default class Signup extends React.Component{

  onSubmit(e){
    e.preventDefault();

    let username = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
  }

  ////////////////////////////////
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button>Create account</button>
        </form>
      </div>
    );
  }//////////////////////////////////
};
