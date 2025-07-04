const fs = require("fs");
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const factorial = (n) => {
  let answer = 1;

  for (let i = 2; i <= n; i++) {
    answer *= i;
  }

  return answer;
};
console.log(factorial(n) / (factorial(k) * factorial(n - k)));
