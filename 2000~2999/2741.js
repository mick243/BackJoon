const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input);

let str = ''
for(let i = 1; i <= a; i++) {
    str = str+i+'\n'
    }

console.log(str);
