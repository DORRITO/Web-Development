import React, { Component } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Centered">
          <Grid className="Boxes" basic container columns={3} padded>
            <Segment.Group horizontal className='Inside'>
                <Segment color='blue' inverted></Segment>
                <Segment color='green' inverted></Segment>
                <Segment color='red' inverted></Segment>
            </Segment.Group>
          </Grid>
        </div>

        <div className="Centered2">
          <Grid className="Boxes" basic container columns={3} padded>
            <Segment.Group horizontal className='Inside'>
                <Segment color='orange' inverted></Segment>
                <Segment color='yellow' inverted></Segment>
                <Segment color='olive' inverted></Segment>
            </Segment.Group>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
