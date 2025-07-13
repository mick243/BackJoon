const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
const n = input[0];

const m = [];
for (let i = 0; i < n; i++) {
  const a = input[2 * i + 1];
  const b = input[2 * i + 2];
  const c = a / b;
  m.push(c * c);
}

console.log(m.join('\n'));
