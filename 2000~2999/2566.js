const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const matrix = input.map(line => line.split(" ").map(Number));
const flat = matrix.flat();
const max = Math.max.apply(null, flat);

let row = 0;
let col = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (matrix[i][j] === max) {
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max);
console.log(`${row} ${col}`);
