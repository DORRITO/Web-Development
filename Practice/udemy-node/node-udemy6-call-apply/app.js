var obj = {
    name: "John Doe",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
//.call!  set the this value
obj.greet.call({ name: 'Jane Doe'});
obj.greet.apply({ name: "Jane Doe"});