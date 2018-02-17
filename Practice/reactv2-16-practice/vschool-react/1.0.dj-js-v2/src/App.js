import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container columns={2} centered>
          <Grid.Column className="Centered" inverted="true" >
            hi
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
