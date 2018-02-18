import React from 'react';
import OpenWeatherMap from 'react-open-weather-map';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: 'grabbing your weather...',
            weatherRes: ''
        };
    }
    //***********************
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            //coordinates
            var lon = position.coords.longitude;
            var lat = position.coords.latitude; 
            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=2c932966f6214d928f480ab04a2e75b2";

            this.setState({weatherRes: api})
        })
    }//***********************

    render() {
      return (
        <div>
          <h1>{this.state.weather} {this.state.weatherRes}</h1>
        </div>
      );
    }
  }

  export default Weather;