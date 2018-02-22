import React, { Component } from 'react';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';

class Servies extends Component {
  render() {
    return (
      <div className="Services" >
        <Segment size='large' inverted style={{backgroundColor: '#E5E5DB'}}>
          <Grid columns={3} padded >
            <Grid.Column color='blue'>Maintenance</Grid.Column>
            <Grid.Column color='blue'>Cleaning</Grid.Column>
            <Grid.Column color='blue'>Supplies</Grid.Column>
            <Grid.Column color='blue'>Maintenance</Grid.Column>
            <Grid.Column color='blue'>Cleaning</Grid.Column>
            <Grid.Column color='blue'>Supplies</Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Servies;