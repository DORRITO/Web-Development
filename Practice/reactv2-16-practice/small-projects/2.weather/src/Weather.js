import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: 72
        };
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.weather}.</h2>
        </div>
      );
    }
  }

  export default Weather;