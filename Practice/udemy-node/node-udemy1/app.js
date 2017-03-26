// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);

//first class function example
function print(){
    console.log("hi");
}

function logPrint(print){
    print();
}

logPrint(print);