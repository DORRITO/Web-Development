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
                <div className="ui blue inverted segment Change1"></div>
                <div className="ui green inverted segment Change2"></div>
                <div className="ui red inverted segment Change3"></div>
            </Segment.Group>
          </Grid>
        </div>

        <div className="Centered2">
          <Grid className="Boxes" container columns={3}>
            <Segment.Group horizontal className='Inside'>
                <div className="ui orange inverted segment Change4"></div>
                <div className="ui yellow inverted segment Change5"></div>
                <div className="ui black inverted segment Change6"></div>
            </Segment.Group>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
