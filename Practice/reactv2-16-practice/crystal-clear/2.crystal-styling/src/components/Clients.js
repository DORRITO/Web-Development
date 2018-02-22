import React, { Component } from 'react';

import { Grid, Header, Segment } from 'semantic-ui-react';

class Clients extends Component {
  render() {
    return (
      <div className="Clients" >
        <Segment style={{marginTop: '1rem'}} >
            <div className="Commercial" style={{marginLeft: '10%'}}>
                <Header style={{margin: '2rem 0 25% 0', display: 'inline-block'}} floated='centered'>Commercial</Header>
            </div>
            <div className="Residential" style={{marginLeft: '15%'}}>
                <Header style={{margin: '2rem 0 25% 0', display: 'inline-block'}} floated='center'>Residential</Header>
            </div>
        </Segment>
      </div>
    );
  }
}

export default Clients;