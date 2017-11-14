import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
//meteor npm install react-addons-pure-render-mixin --save  (lets the next line happen)
//meteor add react-meteor-data to use creat container
import { withTracker } from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {

  return (
    <div className="header">
      <h2>Terraria</h2>
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
      </div>
      <h5 className="header__title">{props.greeting}</h5>
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
