const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const n = input[0];
const score = [0, ...input.slice(1)];
const m = new Array(n + 1).fill(0);

if (n === 1) {
    console.log(score[1]);
} else if (n === 2) {
    console.log(score[1] + score[2]);
} else {
    m[1] = score[1];
    m[2] = score[1] + score[2];
    m[3] = Math.max(score[1] + score[3], score[2] + score[3]);

    for (let i = 4; i <= n; i++) {
        m[i] = Math.max(m[i - 3] + score[i - 1], m[i - 2]) + score[i];
    }

    console.log(m[n]);
}
