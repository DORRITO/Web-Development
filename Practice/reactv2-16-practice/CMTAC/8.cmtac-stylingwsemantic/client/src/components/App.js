import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppCard from './ui/appCard';

import '../App.css';
import logo from './../images/cmtacSign.png';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {greenA400} from 'material-ui/styles/colors';

class App extends Component {

  callApi = async () => {
    const response = await fetch('/home');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppCard />
          <img src={logo} className="App-logo" alt="logo" />
          <h3><Link to="/login">Login</Link></h3>
          <h1 className="App-title">Presented by the Mayors Cross Map Townsmanship Aficionados Club</h1>
        </header>
        <h3>The story so far</h3>
      </div>
    );
  }
}

export default App;