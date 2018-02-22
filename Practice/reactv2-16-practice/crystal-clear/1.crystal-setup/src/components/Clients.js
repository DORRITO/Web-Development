import React, { Component } from 'react';

import { Grid, Header, Segment } from 'semantic-ui-react';

class Clients extends Component {
  render() {
    return (
      <div className="Clients" >
        <Segment style={{marginTop: '1rem'}}>
            <div className="Commercial">
            <Header style={{margin: '2rem 0 0 25%', display: 'inline-block'}} floated='left'>Commercial</Header>
            </div>
            <div className="Residential">
                <Header style={{margin: '2rem 25% 0 0', display: 'inline-block'}} floated='right'>Residential</Header>
            </div>
        </Segment>
      </div>
    );
  }
}

export default Clients;