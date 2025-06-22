const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const coords = [];

for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    coords.push([x, y]);
}

coords.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
});

let result = "";
for (const coord of coords) {
    result += `${coord[0]} ${coord[1]}\n`;
}

console.log(result.trim());
