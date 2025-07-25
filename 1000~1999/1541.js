const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = input.split('-');
const sum = n.map(a => a.split('+').reduce((acc, num) => acc + Number(num), 0)
);

const result = sum.slice(1).reduce((acc, cur) => acc - cur, sum[0]);

console.log(result);
