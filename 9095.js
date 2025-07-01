const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const T = input[0];
const ns = input.slice(1);

const dp = Array(12).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

ns.forEach(n => {
    console.log(dp[n]);
});
