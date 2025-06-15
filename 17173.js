const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const K = input[1].split(' ').map(Number);

let sum = 0;

for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
        if (i % K[j] === 0) {
            sum += i;
            break;
        }
    }
}

console.log(sum);
