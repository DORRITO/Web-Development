import React, { Component } from 'react';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';

class Servies extends Component {
  render() {
    return (
      <div className="Services" >
        <Segment size='large' inverted style={{backgroundColor: '#E5E5DB'}}>
          <Grid columns={3}>
            <Grid.Column><Icon size='large' color='bue' inverted name='wrench' />
              Maintenance
              <h6>meow</h6>
            </Grid.Column>
            <Grid.Column><Icon size='large' color='bue' inverted name='leaf' />
              Cleaning
              <h6>meow</h6>
            </Grid.Column>
            <Grid.Column><Icon size='large' color='bue' inverted name='archive' />
              Supplies
              <h6>meow</h6>
            </Grid.Column>
            <Grid.Column><Icon size='large' color='bue' inverted name='first aid' />
              Restoration
              <h6>meow</h6>
            </Grid.Column>
            <Grid.Column><Icon size='large' color='bue' inverted name='tint' />
              Chemicals
              <h6>meow</h6>
            </Grid.Column>
            <Grid.Column><Icon size='large' color='bue' inverted name='child' />
              Customer Service
              <h6>meow</h6>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Servies;