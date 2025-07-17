const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\s+/).map(Number);

console.log(A * 1000 + B * 10000);
