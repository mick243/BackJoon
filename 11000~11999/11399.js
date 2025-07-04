const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const time = input[1].split(/\s+/).map(Number);

time.sort((a, b) => a - b);

let total = 0;
let acc = 0;
for (const t of time) {
  acc += t;
  total += acc;
}

console.log(total);
