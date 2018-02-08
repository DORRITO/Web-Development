import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

//////////////////////////////////
const PlayerBoxIcon = (props) => {
    return(
      <div>
        <Icon name={props.icon2} size="large"/>
        <Icon name={props.icon} size="huge"/>
        <Icon name={props.icon3} size="large"/>
      </div>
    );
};/////////////////////////////////

PlayerBoxIcon.propTypes ={
  icon: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  icon3: PropTypes.string.isRequired
};

export default PlayerBoxIcon;