const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if(err){console.log('errorrrr')}
    console.log('1', data.toString())
});

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString())

//append
// fs.appendFile('./hello.txt', 'this is so cool', err => { 
//     if(err){console.log(err)}
// })

//write
// fs.writeFile('./bye.txt', 'sad to see you go', err => { 
//     if(err){console.log(err)}
// })

//delete
// fs.unlink('./bye.txt', err => {
//     if(err){console.log(err)}
//     console.log('inception')
// })