const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const result1 = parseInt((a * b) / c);
const result2 = parseInt((a / b) * c);

console.log(Math.max(result1, result2));
