const fs = require('fs');
const [count, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const max = Math.max(...input.split(" ").map(Number));
const min = Math.min(...input.split(" ").map(Number));

console.log(max * min);
