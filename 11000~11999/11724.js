const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let a = 0;
const n = input[a++];  // 정점의 개수
const m = input[a++];  // 간선의 개수

// 인접 리스트 생성 (1번부터 N번까지)
const graph = Array.from({ length: n + 1 }, () => []);

// 간선 정보 채우기 (무향 그래프)
for (let i = 0; i < m; i++) {
  const u = input[a++];
  const v = input[a++];
  graph[u].push(v);
  graph[v].push(u);
}

// 방문 배열
const visited = Array(n + 1).fill(false);

let components = 0;

// 스택을 이용한 DFS 함수
function dfs(start) {
  const stack = [start];
  visited[start] = true;

  while (stack.length) {
    const node = stack.pop();
    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
      }
    }
  }
}

// 1번부터 N번까지 순회하며, 아직 방문하지 않은 점이 있으면 DFS 돌리고 카운트
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    components++;
  }
}

console.log(components);
