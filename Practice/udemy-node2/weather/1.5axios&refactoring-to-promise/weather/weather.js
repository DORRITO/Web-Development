const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/f08eb677673ef8e25444c3d098236e93/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('unable to fetch weather.');
        }
    })
};

module.exports.getWeather = getWeather;


//f08eb677673ef8e25444c3d098236e93
//https://api.darksky.net/forecast/f08eb677673ef8e25444c3d098236e93/33.4475319,-112.5364865