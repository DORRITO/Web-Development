const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('h', 'help')
    .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

weather.getWeather(33.4475319, -112.5364865, (errorMessage, weatherResults) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});