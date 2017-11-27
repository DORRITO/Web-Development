console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var add = notes.add(1,2);
console.log(`Result: ${add}`);

let user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);