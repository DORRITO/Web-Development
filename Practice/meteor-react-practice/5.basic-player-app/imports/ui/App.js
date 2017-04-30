import React from 'react';
import PropTypes from 'prop-types';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <AddPlayer />
        <PlayerList players={this.props.players} />
      </div>
    );
  }
};
