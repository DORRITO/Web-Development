import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
//meteor npm install react-addons-pure-render-mixin --save  (lets the next line happen)
//meteor add react-meteor-data to use creat container
import { withTracker } from 'meteor/react-meteor-data';

export const PrivateHeader = (props) => {
  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';

  return (
    <div className="header">
      <div className="header__content">
        <img className="header__nav-toggle" src={navImageSrc} onClick={props.handleNavToggle} />
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
      </div>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////
PrivateHeader.propTypes ={
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  handleNavToggle: PropTypes.func.isRequired
};

export default withTracker(() => {
  return {
    handleLogout: () => Accounts.logout(),
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
  };
})(PrivateHeader);
