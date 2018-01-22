import React from 'react';
import PropTypes from 'prop-types';

import {Player} from './playerComponents/Player';

export const GamePage = () => {

    // <button onClick={() => props.handleLogout()}>Logout</button>
    //////////
    return (
      <div>
        <h2>Terraria</h2>
        <h1>Presented by the Mayors Cross Map Townsmanship Aficionados Club</h1>
        <h5>(In cooperation with the arcane order)</h5>
        <div className="playersSection">
          <Player name="Rychar" icon="I'm a sign and building" />
          <Player name="Tylendel" icon="I'm a castle" />
          <Player name="Wolfbane" icon="I'm a tent and fireplace" />
        </div>
        <Player name="GM" icon="i'm a puppet master"/>
      </div>
    );
  };
  //////////////////////////////////////////////////////////////////////
  GamePage.propTypes ={
    // title: PropTypes.string.isRequired,
    // handleLogout: PropTypes.func.isRequired,
    // greeting: PropTypes.string.isRequired
  };

  export default GamePage;