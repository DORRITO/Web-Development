import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import Rychar from './../players/Rychar';
import Reygan from './../players/Reygan';
import Tylendel from './../players/Tylendel';
import GM from './../players/GM';
import Logout from './../Logout';

export default class GamePage extends React.Component{
  render() {
      return(
        <div>
          <h1>Terraria THIS IS THE GAME PAGE YAH YAH YAH</h1>
          <h2>Brought to you by the Mayors Cross Townsmanship Aficionados Club</h2>
          <Logout />
          <Rychar />
          <Tylendel />
          <Reygan />
          <GM />
        </div>
      );
  }
};
