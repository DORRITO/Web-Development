console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

/*********lodash string testing**************
// console.log(_.isString(true));
// console.log(_.isString('string!'));
/*******************************************/

let filteredArray = _.uniq(['chip', 1, 'chip', 1, 2, 3, 4]);
console.log(filteredArray);

//*******add function from notes***********
// var add = notes.add(1,2);
// console.log(`Result: ${add}`);
/**************************************/

// let user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);