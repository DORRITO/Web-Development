import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});
//object spread operator
// let user = {
//   name: 'chip',
//   location: 'az',
//   age: 0
// };
// let person = {
//   ...user,
//   age: 25
// };
// console.log(person);
//
// //object property shorthand
// let bike = 'scott';
// let stuff = {
//   bike: bike
// }
// console.log(stuff);
// ////////////////////
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let yearBuilt = 1995;
//
// console.log({
//   ...house,
//   yearBuilt,
//   flooring: 'Carpet'
// });
