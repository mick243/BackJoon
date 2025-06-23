const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = parseInt(input[0]);
const stack = [];

for (let i = 1; i <= K; i++) {
  const num = parseInt(input[i]);
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
