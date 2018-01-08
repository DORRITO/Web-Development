// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('h', 'help')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/f08eb677673ef8e25444c3d098236e93/33.4475319,-112.5364865`,
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }else{
        console.log('unable to fetch weather.');
    }
})

//f08eb677673ef8e25444c3d098236e93
//https://api.darksky.net/forecast/f08eb677673ef8e25444c3d098236e93/33.4475319,-112.5364865