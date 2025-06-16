const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [...new Set(input)];
arr.shift();

let result = arr.sort().sort((a, b) => a.length - b.length).join("\n");

console.log(result);
