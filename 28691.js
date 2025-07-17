const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const a = {
  'M': 'MatKor',
  'W': 'WiCys',
  'C': 'CyKor',
  'A': 'AlKor',
  '$': '$clear',
};

console.log(a[input]);
