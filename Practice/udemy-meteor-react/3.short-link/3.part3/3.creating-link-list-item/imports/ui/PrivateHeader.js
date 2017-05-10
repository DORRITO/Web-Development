import React from 'react';
import PropTypes from 'prop-types';

import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = (props) => {  //const instead of export default because name is being used in PropTypes
    return(
      <div>
        <h1>{props.title}</h1>
        <button onClick={() => Accounts.logout()}>Logout</button>
      </div>
    );
}

// export default class PrivateHeader extends React.Component{
//   /////////////////////
//   onLogout() {
//     Accounts.logout();
//   }///////////////////
//
//   render(){
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }
/////////////////////////////////////////
PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PrivateHeader;
