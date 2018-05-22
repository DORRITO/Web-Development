const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if(err){console.log('errorrrr')}
    console.log('1', data.toString())
});

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString())