const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i = 0; i < input.length; i++) {
 let [num1, num2] = input[i].split(' ');
    console.log(parseInt(num1) + parseInt(num2));
}
