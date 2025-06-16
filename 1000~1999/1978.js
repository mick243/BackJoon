const Prime = (n) => {
    if (n == 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [m, num] = input.split("\n");

console.log(num.split(" ").filter(v => Prime(v)).length);
