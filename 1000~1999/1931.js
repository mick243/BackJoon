const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);

const meetings = input.slice(1).map(line => {
  const [start, end] = line.split(' ').map(Number);
  return { start, end };
});

meetings.sort((a, b) => a.end - b.end || a.start - b.start);

let count = 0;
let lastEnd = 0;
for (const { start, end } of meetings) {
  if (start >= lastEnd) {
    count++;
    lastEnd = end;
  }
}

console.log(count);
