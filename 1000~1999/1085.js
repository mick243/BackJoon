const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

x = parseInt(input[0]);
y = parseInt(input[1]);
w = parseInt(input[2]);
h = parseInt(input[3]);

a = Math.min(x, w-x);
b = Math.min(y, h-y);

console.log(Math.min(a,b));
