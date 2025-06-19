const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()
let n = parseInt(input);

const cards = Array.from({ length: n}, (_, index) => index+1);
let i = 0;

while (i < cards.length-1) {
    if(i % 2 ==0){
        i++;
    } else {
        cards.push(cards[i++]);
    }
}

console.log(cards[i]);
