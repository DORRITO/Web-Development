import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
//meteor npm install react-addons-pure-render-mixin --save  (lets the next line happen)
//meteor add react-meteor-data to use creat container
import {createContainer} from 'meteor/react-meteor-data';
import { withTracker } from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
      </div>
    </div>
  );
};

PrivateHeader.propTypes ={
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default withTracker(() => {
  return {
    handleLogout: () => Accounts.logout()
  };
})(PrivateHeader);
