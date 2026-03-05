const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = input.slice(1).map(Number);

let b = m;
let c = 0;

// 큰 동전부터 사용
for (let i = n - 1; i >= 0; i--) {
  if (b >= a[i]) {
    const d = Math.floor(b / a[i]);
    c += d;
    b -= d * a[i];
  }
}

console.log(c);
