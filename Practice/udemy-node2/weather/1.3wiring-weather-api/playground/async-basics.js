console.log('starting app');

setTimeout(() =>{
    console.log('inside of callback');
}, 2000);

setTimeout(() => {
    console.log('zero delay callback');
})

console.log('finishing up');