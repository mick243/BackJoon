const fs = require('fs');
const [N, ...data] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

const arr = data; 

const n = Array.from(new Set(arr)).sort((a, b) => a - b);

//값 → 압축된 좌표(인덱스) 매핑
const m = new Map();
n.forEach((v, i) => {
  m.set(v, i);
});

//원래 배열의 각 값에 대해 매핑된 인덱스를 출력
const result = arr.map(v => m.get(v));

console.log(result.join(' '));
