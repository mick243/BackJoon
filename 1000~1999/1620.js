const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const number = new Map();
const name = new Map();

for (let i = 1; i <= n; i++) {
    const poke = input[i].trim();
    number.set(poke, i);
    name.set(i, poke);
}

const answer = [];

for (let i = n + 1; i <= n + m; i++) {
    const query = input[i].trim();
    
    if (isNaN(query)) {
        answer.push(number.get(query));
    } else {
        answer.push(name.get(Number(query)));
    }
}

console.log(answer.join('\n'));
