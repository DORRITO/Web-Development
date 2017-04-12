//spread operator

///////////////////////
//function add(a, b) {
//    return a +b;
//}
//
//console.log(add(3,1));
//
//var toAdd = [9, 5];
//console.log(add(...toAdd));
/////////////////////////////////

//var groupA = ["jen", "cory"];
//var groupB = ["Vikram"];
//var final = [...groupB, 3, ...groupA];
//
//console.log(final);
///////////////////////////////////////

var person1 = ['chip', 25];
var person2 = ['t', 29];

function helloAge(name, age){
    console.log(`hello, ${name}.  you are ${age}`);
}

helloAge(...person1);
helloAge(...person2);
//////////////////////////////////////

var names = ["chip", "t"];
var final = ["ric", ...names];

final.forEach(function(name) {
    console.log(`hello there, ${name}`);
});

