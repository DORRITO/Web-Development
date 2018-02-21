import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

class Header extends React.Component {
    ///////////////////////
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }///////////////////////

    //*******************
    componentDidMount(){
        
    }//******************

    ////////////////////////////////////////////////////////////////////////////
    render() {
      return (
        <div className='Header'>
          <h1 className="Text">Crystal</h1>
        </div>
      );
    }//////////////////////////////////////////////////////////////////////////////
  }

  export default Header;