const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let count = 0;
for (let i = 5; i <= input; i *= 5) {
  count += Math.floor(input / i);
}

console.log(count);
