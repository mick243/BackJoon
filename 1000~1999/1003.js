const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0], 10);
const Ns = input.slice(1).map(line => parseInt(line, 10));
const maxN = Math.max(...Ns);

const dp = Array.from({ length: maxN + 1 }, () => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= maxN; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

let output = "";
for (const N of Ns) {
  output += `${dp[N][0]} ${dp[N][1]}\n`;
}

console.log(output.trim());
