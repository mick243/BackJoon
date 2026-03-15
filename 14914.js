const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 사과와 바나나 중 더 작은 값을 기준으로 반복
const n = Math.min(a, b);

let result = '';

for (let i = 1; i <= n; i++) {
    if (a % i === 0 && b % i === 0) {
        result += `${i} ${a / i} ${b / i}\n`;
    }
}

process.stdout.write(result);
