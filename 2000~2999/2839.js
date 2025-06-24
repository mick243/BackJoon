const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let n = input;
let count = 0;

while (n >= 0 ){
      if (n % 5 === 0) {
    count += n / 5;
    console.log(count);
    return;
  }
  n -= 3;
  count++;
}

console.log(-1);
