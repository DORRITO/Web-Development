import React, { Component } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Centered">
          <Grid className="Boxes" container columns={3} >
            <Segment.Group horizontal className='Inside'>
                <div className="ui blue inverted segment Change">meow</div>
                <Segment className="Change2" color='green' inverted></Segment>
                <Segment className="Change3" color='red' inverted></Segment>
            </Segment.Group>
          </Grid>
        </div>

        <div className="Centered2">
          <Grid className="Boxes" container columns={3}>
            <Segment.Group horizontal className='Inside'>
                <Segment className="Change4" color='orange' inverted></Segment>
                <Segment className="Change5" color='yellow' inverted></Segment>
                <Segment className="Change6" color='black' inverted></Segment>
            </Segment.Group>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
