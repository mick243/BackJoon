const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const dp = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input]);
