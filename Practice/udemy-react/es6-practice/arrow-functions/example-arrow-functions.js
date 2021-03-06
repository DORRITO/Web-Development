var names = ["chip", "anne", "solace"];

//challenge
var returnNum1 = (num1, num2) => num1 + num2;
console.log(returnNum1(1,2));

var returnNum2 = (num1, num2) => {return num1 + num2};
console.log(returnNum2(3, 7));

/////////arrow 'returns'//////////////
// var returnMe = (name) => name + '!';
// console.log(returnMe('chip'));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// names.forEach((name) => console.log(name));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// var person = {
//     name: 'chip',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// };
// person.greet();
/////////////////////////////////////////////////////

/////////////////new way///////////////////////////
////////arrow function replaces anonymous functions, this can take multiple directions////////
// names.forEach((name) => {
//     console.log('arrowFunc', name)
// });
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////old way//////////////////
// names.forEach(function(name) {
//     console.log('forEach', name);
// });
//////////////////////////////////////////////////