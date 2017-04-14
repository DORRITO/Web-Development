var moment = require('moment');
// Jan 1 1970 @ 12:00 am -> 0
// Jan 1 1970 @ 12:01 am -> 60

//console.log(moment().format());


var now = moment();
console.log("Current timestamp", now.unix());

var timestamp = 1492159310;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mma'));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mmA'));