import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../images/cmtacSign.png';
import '../App.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log('is this even working')
    this.callApi()
      .then(res => console.log('whhaaaaat'))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/login');
    const body = await response.json();
    
    if (response.status !== 200) throw Error(body.message);
    console.log(body)
    return body;
  };

   ///////////updates text change//////////
   onSubmit(e){
     e.preventDefault();
    // this.setState({text: e.target.value});
    console.log('im firing!')
  }////////////////////////////////////////

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3><Link to="/">Home</Link></h3>
          <h1 className="App-title">The Mayors Cross Map Townsmanship Aficionados Club welcomes you to enter Terraria!</h1>
        </header>

        <div className="boxed-view" >
          <div className="boxed_view__box">
            <h1>MCMTAC Login</h1>
            <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button className="button">Enter Terraria!</button>
            </form>
          </div>
        </div>

        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}
// <button className="button"><Link to="/gamepage">Enter Terraria!</Link></button>
export default Login;