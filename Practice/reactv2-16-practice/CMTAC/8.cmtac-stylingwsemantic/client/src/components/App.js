import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header, Image } from 'semantic-ui-react';
import '../App.css';
import logo from './../images/cmtacSign.png';
import map from './../images/map_colored.jpeg';

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
        <Header as='h1' className="App-header" size="medium">
          <div><Image src={logo} alt="logo" size='small' verticalAlign='middle'/></div>
          <div><Link to="/login">Login</Link></div>
          <div>{' '}Presented by the Mayors Cross Map Townsmanship Aficionados Club</div>
        </Header>
        <Image src={map} verticalAlign='middle'/>
        <h3>The story so far</h3>
      </div>
    );
  }
}

export default App;