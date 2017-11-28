console.log('starting app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const command = process.argv[2];
console.log('Command: ', command);

if(command === 'add'){
    console.log('adding note');
} else if (command === 'list'){
    console.log('listing notes');
} else if(command === 'read'){
    console.log('read note');
} else if(command === 'remove'){
    console.log('removing note');
} else{
    console.log('command not recognized');
}