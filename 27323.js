const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

console.log(a * b);
