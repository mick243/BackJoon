const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const repeat = parseInt(input[0]);

for(let i = 1; i <= repeat; i++) {
    const [r, s] = input[i].split(' ');
    let result = '';
  for (const char of s) {
    for (let j = 0; j < parseInt(r); j++) {
      result += char;
    }
  }
  console.log(result);
}
