import React from 'react';
import PropTypes from 'prop-types';

import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = (props) => {  //const instead of export default because name is being used in PropTypes
    return(
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{props.title}</h1>
          <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
        </div>
      </div>
    );
}
/////////////////////////////////////////
PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired
};
export default PrivateHeader;
