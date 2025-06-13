const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
  const N = parseInt(input[0]);
  const M = parseInt(input[1]);

  if (N * 100 >= M) {
    console.log("Yes");
  } else {
    console.log("No");
  }
