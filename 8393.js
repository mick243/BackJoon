const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;
for(i = 1; i <= input; i++) {
    sum = sum+i;
}

console.log(sum);
