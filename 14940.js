const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++], m = input[idx++];
const grid = Array.from({length: n}, () => Array(m));
let sx = 0, sy = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    const v = input[idx++];
    grid[i][j] = v;
    if (v === 2) {
      sx = i; sy = j;  // 목표 지점 저장
    }
  }
}

// 거리 배열 초기화 (-1 = 미방문)
const dist = Array.from({length: n}, () => Array(m).fill(-1));

// BFS 준비
const queue = [];
const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

dist[sx][sy] = 0;
queue.push([sx, sy]);

// BFS 수행
while (queue.length) {
  const [x, y] = queue.shift();
  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (
      nx >= 0 && nx < n && ny >= 0 && ny < m &&
      grid[nx][ny] !== 0 && dist[nx][ny] === -1
    ) {
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

// 출력 생성
const out = [];
for (let i = 0; i < n; i++) {
  const line = [];
  for (let j = 0; j < m; j++) {
    if (grid[i][j] === 0) {
      line.push(0);
    } else {
      line.push(dist[i][j]);
    }
  }
  out.push(line.join(' '));
}

console.log(out.join('\n'));
