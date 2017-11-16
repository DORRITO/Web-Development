import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
//meteor npm install react-addons-pure-render-mixin --save  (lets the next line happen)
//meteor add react-meteor-data to use creat container
import { withTracker } from 'meteor/react-meteor-data';

import Player from './PlayerComponents/Player';

export const PrivateHeader = (props) => {

  return (
    <div>
      <h2>Terraria</h2>
      <h1>{props.title}</h1>
      <h5>{props.greeting}</h5>
      <button onClick={() => props.handleLogout()}>Logout</button>
      <div className="playersSection">
        <Player name="Rychar"/>
        <Player name="Tylendel"/>
        <Player name="Wolfbane"/>
      </div>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////
PrivateHeader.propTypes ={
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  greeting: PropTypes.string.isRequired
};

export default withTracker(() => {
  return {
    greeting: '(In cooperation with the arcane order)',
    handleLogout: () => Accounts.logout()
  };
})(PrivateHeader);
