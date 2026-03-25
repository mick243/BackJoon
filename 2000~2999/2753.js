const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = parseInt(input);

if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}
