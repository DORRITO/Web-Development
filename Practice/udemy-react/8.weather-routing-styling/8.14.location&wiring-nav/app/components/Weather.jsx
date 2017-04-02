var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var queryString = require('query-string'); //v4 react took out easy string query

var Weather = React.createClass({
    
    getInitialState: function() {
        return{
            isLoading: false    
        }
    },
    
    handleSearch: function(location){
        var that = this;
        
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        
        openWeatherMap.getTemp(location).then(function(temp) {           
            that.setState({
                isLoading: false,
                location: location,
                temp: temp
            });
        }, function(err){ 
            that.setState({
                isLoading: false,
                errorMessage: err.message
            });          
        });
    },
    
    componentDidMount: function() {
        var location = queryString.parse(this.props.location.search).location;
              
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash= '#/';
        }
    },
    
    componentWillReceiveProps: function(newProps) {
        var location = queryString.parse(newProps.location.search).location;
                    
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash= '#/';
        }
    },
    
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        
        function renderError(){
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }
        
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;