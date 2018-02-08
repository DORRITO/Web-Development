import React, { Component } from 'react';
import {history} from './../routers/AppRouter';
// import PropTypes from 'prop-types';
import { Grid, Menu } from 'semantic-ui-react';

import Player from './playerComponents/Player';
  class GamePage extends Component {
    constructor(props){
      super(props);
      this.state = {};
    }

    onClick(e){
      e.preventDefault();
      history.push('/');
    }
    ////////////////////////////////////////////////////////////////////////////////
    render() {
      return (
        <div>
          <Menu widths="9" style={{backgroundColor: '#65e69f', color: '#4b220a', height: '4rem'}} >
            <h2>Terraforma</h2>
            <div><h1 className="Header-gamepage">Presented by the Mayors Cross Map Townsmanship Aficionados Club</h1>
            <h5>(In cooperation with the arcane order)</h5></div>
            <Menu.Item header onClick={this.onClick.bind(this)}>Logout</Menu.Item>
          </Menu>
          <Grid columns='3' textAlign='center' verticalAlign="middle" className="playersSection">
            <Grid.Row>
              <Player name="Rychar" icon="building outline" icon2="university" icon3="lab" />
              <Player name="Tylendel" icon="fort awesome" icon2="university" icon3="lab" />
              <Player name="Wolfbane" icon="fire" icon2="fire" icon3="fire" />
              <Grid.Column >
                <Grid.Row><Player name="Gm" icon="asl" icon2="fire" icon3="fire"/></Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
  };////////////////////////////////////////////////////////////////////////////
}
//////////////////////////////////////////////////////////////////////
GamePage.propTypes ={
  // title: PropTypes.string.isRequired,
  // handleLogout: PropTypes.func.isRequired,
  // greeting: PropTypes.string.isRequired
};

export default GamePage;