const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const queue = [];
const result = [];
const len = Number(input[0]);

for (let i = 1; i <= len; i++) {  
    let q = input[i].split(" ");
    switch(q[0]) {
        case "push":
          queue.push(q[1]);
          break;
            
        case "pop": 
          result.push(queue.shift() || -1);
          break;

        case "size": 
          result.push(queue.length);
          break;

        case "empty": 
          result.push(queue[0] ? 0 : 1);
          break;

        case "front": 
          result.push(queue[0] || -1);
          break;

        case "back":
          result.push(queue[queue.length-1] || -1);
          break;
    }
}

console.log(result.join("\n"));
