const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [n, m, a] = input;

const day = Math.ceil((a - n) / (n - m)) + 1;
console.log(day);
