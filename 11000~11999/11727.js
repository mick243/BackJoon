const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);
const a = 10007;

const n = new Array(input + 1).fill(0);
n[1] = 1;
if (input >= 2) n[2] = 3;

for (let i = 3; i <= input; i++) {
  n[i] = (n[i - 1] + 2 * n[i - 2]) % a;
}

console.log(n[input]);
