import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import Rychar from './players/Rychar';
import Reygan from './players/Reygan';
import Tylendel from './players/Tylendel';
import GM from './players/GM';

export default class Splash extends React.Component{
  render() {
      return(
        <div>
          <h1>Terraria</h1>
          <p><Link to="/Link1">page 1</Link></p>
          <Rychar />
          <Tylendel />
          <Reygan />
          <GM />
        </div>
      );
  }
};
