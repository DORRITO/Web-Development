import React from 'react';

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
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //coordinates
                var lon = position.coords.longitude;
                var lat = position.coords.latitude; 
                var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=2c932966f6214d928f480ab04a2e75b2";
                // this.setState({weatherRes: res})
                this.callAPI(api)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            },
            (error) => this.setState({ weather: error.message }),
            //timeout
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }//***********************

    /////////////////////////////////////////////
    callAPI = async (api) =>{
        const response = await fetch(api);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }/////////////////////////////////////////////

    render() {
      return (
        <div>
          <h1>{this.state.weather}</h1>
          <h3></h3>
        </div>
      );
    }
  }

  export default Weather;