//Challenge to only add numbers
function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a ==='number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject("A or B aren't numbers");
        }
    });
}

addPromise(1, 2).then(function(data) {
    console.log('the total is', data);
}, function(err)  {
    console.log('error', err);
});
//bad data
addPromise('chip', 9).then(function(data){
    console.log("this shouldn't show up, nope nope nope");
}, function(err) {
    console.log("this should appear", err);
});


///////////////////Promises////////////////////////
//function getTempPromise(location) {
//    return new Promise(function(resolve, reject) {
//        setTimeout(function(){
//            resolve(79);
//            reject('city not found');  
//        }, 1000);
//    });
//}
//
//getTempPromise('philly').then(function(temp) {
//    console.log('promise success', temp);
//}, function(err) {
//    console.log('promise error', err);
//})


/////////////////function callback bad way/////////

//function getTempCallback (location, callback) {
//    callback(undefined, 78);
//    callback('city not found');
//}
//
//getTempCallback('Philadelphia', function(err, temp) {
//    if (err) {
//        console.log('error', err);
//    } else {
//        console.log('succes', temp)
//    }
//});