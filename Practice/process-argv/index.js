//grab name and greeting from argv
function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}
//named variables from function call
var greeting = grab("--greeting");
var user = grab('--user');

if (!user || !greeting){
    console.log("no input!");
} else{
    console.log(`Hello ${user}, ${greeting}`);
}