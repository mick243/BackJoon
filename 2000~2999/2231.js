const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
 
const n = parseInt(input);
let m = 0;

for(let i = 0; i < n;i++){
    let sum = 0;
    const candidate = i;
    const string = candidate.toString();
    for(let j = 0; j < string.length;j++){
        sum += parseInt(string[j]);
    }
    sum += candidate;
    if(sum == n){
        m = candidate;
        break;
    }
}

console.log(m);
