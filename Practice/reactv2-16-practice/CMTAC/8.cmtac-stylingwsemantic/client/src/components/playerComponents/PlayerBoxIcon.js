import React from 'react';
// import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

//////////////////////////////////
const PlayerBoxIcon = (props) => {
    return(
      <div>
        <Icon name={props.icon[1]} size="large" color={props.icon[3][1]} />
        <Icon name={props.icon[0]} size="huge"  color={props.icon[3][0]} />
        <Icon name={props.icon[2]} size="large" color={props.icon[3][2]} />
      </div>
    );
};/////////////////////////////////

// PlayerBoxIcon.propTypes ={
//   icon: PropTypes.array.isRequired
// };

export default PlayerBoxIcon;