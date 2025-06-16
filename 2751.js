const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

const arr = input.shift();

input.sort((a,b) => a - b);

console.log(input.join("\n"))
