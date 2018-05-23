const fs = require('fs');

const file = fs.readFileSync('./santa.txt').toString();

let door = 0;

for (let i = 0; i < file.length; i++){
    file[i] === '(' ? door++ : door--
    
    if(door === -1){console.log(i + 1)}
}

console.log(door)
