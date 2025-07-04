const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const n= +input[0];
const k= +input[1];

const queue = [];
const result = [];

for (let i = 1; i <= n; i++) {
  queue.push(i);
}

let index = 0;

while (queue.length > 0) {
  index = (index + k - 1) % queue.length;
  result.push(queue.splice(index, 1)[0]);
}

console.log(`<${result.join(', ')}>`);
