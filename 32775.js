const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

if (n <= m) {
    console.log("high speed rail");
} else {
    console.log("flight");
}
