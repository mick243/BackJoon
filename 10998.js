const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

const multiple = (a*b);
console.log(multiple)
