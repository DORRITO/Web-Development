import React from 'react';

class Weather extends React.Component {
    ///////////////////////
    constructor(props) {
        super(props);
        this.state = {
            weather: 'grabbing your weather...',
            weatherRes: ''
        };
    }///////////////////////

    //*********************************************************************
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            //coordinates
            var lon = position.coords.longitude;
            var lat = position.coords.latitude; 
            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=2c932966f6214d928f480ab04a2e75b2";
            // this.setState({weatherRes: res})
            this.callAPI(api)
                .then(res => {
                        let kTemp = res.main.temp;
                        let fTemp = kTemp * (9/5) - 459.67;
                        let cTemp = kTemp - 273.15;
                        console.log(fTemp.toFixed(1), cTemp.toFixed(1))
                    }
                )
                .catch(err => console.log(err))
        });
    }//*********************************************************************

    /////////////////////////////////////////////
    callAPI = async (api) =>{
        const response = await fetch(api);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }/////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    render() {
      return (
        <div>
          <h1>{this.state.weather}</h1>
        </div>
      );
    }//////////////////////////////////////////////////////////////////////////////
  }

  export default Weather;