import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import ReactRain from 'react-rain-animation';
 
import "react-rain-animation/lib/style.css";

class Weather extends React.Component {
    ///////////////////////
    constructor(props) {
        super(props);
        this.state = {
            weather: 'grabbing your weather...',
            cTemp: '',
            location: '',
            country: '',
            description: ''
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
                        let fTemp = (kTemp * (9/5) - 459.67).toFixed(1) + '°F';
                        let cTemp = (kTemp - 273.15).toFixed(1) + '°C';
                        let country = res.sys.country;
                        let location = res.name;
                        let description = res.weather[0].description;
                        this.setState({weather: fTemp, cTemp, location, country, description});
                    }
                )
                .catch(err => console.log(err));
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
        <Grid centered columns={2}>
            <ReactRain numDrops="500" />
            <Segment style={{backgroundColor: '#D6E3E8B3'}} padded raised>
            <Grid.Row centered>
                <Grid.Column textAlign='center'>
                    <h1 className='Decoration'>{this.state.weather}</h1>
                    <h2 className='Decoration'>{this.state.description ? this.state.description : ''}</h2>
                    <h2 className='Decoration'>{this.state.location ? `In ${this.state.location}, ${this.state.country}` : ''}</h2>
                </Grid.Column>
            </Grid.Row>
            </Segment>
        </Grid>
      );
    }//////////////////////////////////////////////////////////////////////////////
  }

  export default Weather;