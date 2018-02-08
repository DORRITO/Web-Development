import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

//////////////////////////////////
const PlayerBoxIcon = (props) => {
    return(
      <div>
        <Icon name={props.icon[1]} size="large"/>
        <Icon name={props.icon[0]} size="huge"/>
        <Icon name={props.icon[2]} size="large"/>
      </div>
    );
};/////////////////////////////////

// PlayerBoxIcon.propTypes ={
//   icon: PropTypes.array.isRequired
// };

export default PlayerBoxIcon;