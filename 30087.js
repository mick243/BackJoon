const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const roomMap = {
  "Algorithm": "204",
  "DataAnalysis": "207",
  "ArtificialIntelligence": "302",
  "CyberSecurity": "B101",
  "Network": "303",
  "Startup": "501",
  "TestStrategy": "105"
};

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
     console.log(roomMap[input[i]]);
}
