const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    if(input % 2 === 0){
        console.log(`${input} is even`);
    }else{
        console.log(`${input} is odd`);
    }
}).on('close', function () {
    n = Number(input[0]);
});