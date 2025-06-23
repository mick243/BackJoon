const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0].trim());
const N = Number(input[1].trim());
const F = input[2].split(' ').map(Number);

const sum = F.reduce((acc, x) => acc + x, 0);

if (sum >= T) {
  console.log("Padaeng_i Happy");
} else {
  console.log("Padaeng_i Cry");
}
