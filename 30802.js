const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];
const size = input[1].split(" ").map(Number);
const [t, p] = input[2].split(" ").map(Number);

const t_max = size.reduce((acc, s) => acc + Math.ceil(s / t), 0);

const p_max = Math.floor(n / p);
const p_r = n % p;

console.log(t_max);
console.log(p_max, p_r);
