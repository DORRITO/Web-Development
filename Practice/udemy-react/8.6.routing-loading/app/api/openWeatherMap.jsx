var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2c932966f6214d928f480ab04a2e75b2&units=imperial';
//api url
//2c932966f6214d928f480ab04a2e75b2

module.exports = {
    getTemp: function(location) {
        //encoded keeps url from messing up
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        //axios promis
        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}