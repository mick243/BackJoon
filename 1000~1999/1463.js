const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const a = Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
    a[i] = a[i - 1] + 1;

    if (i % 2 === 0) {
        a[i] = Math.min(a[i], a[i / 2] + 1);
    }

    if (i % 3 === 0) {
        a[i] = Math.min(a[i], a[i / 3] + 1);
    }
}

console.log(a[input]);
