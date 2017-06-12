import React from 'react';
import PropTypes from 'prop-types';

import AddName from './AddName';
import AddGame from './AddGame';
import TitleBar from './TitleBar';
import NameList from './NameList';
import GameList from './GameList';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <div className="nameDiv">
          <TitleBar title={this.props.title} subtitle="List of Names" />
          <NameList names={this.props.names} />
          <AddName />
        </div>
        <div className="gameDiv">
          <TitleBar title={this.props.title} subtitle="List of Games" />
          <GameList games={this.props.games} />
          <AddGame />
        </div>
      </div>
    );
  }
};
//////////////////////////////
App.propTypes = {
  names: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired
};
