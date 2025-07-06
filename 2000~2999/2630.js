const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

const N = input[0];
const paper = [];
for (let i = 0; i < N; i++) {
  paper.push(input.slice(1 + i * N, 1 + (i + 1) * N));
}

let white = 0;
let blue = 0;

function countColor(x, y, size) {
  const first = paper[y][x];
  let allSame = true;

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (paper[i][j] !== first) {
        allSame = false;
        break;
      }
    }
    if (!allSame) break;
  }

  if (allSame) {
    if (first === 0) white++;
    else blue++;
  } else {
    const half = size / 2;
    countColor(x, y, half); // 왼쪽 위
    countColor(x + half, y, half); // 오른쪽 위
    countColor(x, y + half, half); // 왼쪽 아래
    countColor(x + half, y + half, half); // 오른쪽 아래
  }
}

// 전체 영역에 대해 재귀 호출
countColor(0, 0, N);

// 결과 출력
console.log(white);
console.log(blue);
