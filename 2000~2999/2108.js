const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const N = input[0];
const numbers = input.slice(1).sort((a, b) => a - b);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const average = Math.round(sum / N) === -0 ? 0 : Math.round(sum / N);

const median = numbers[Math.floor(N / 2)];

const freqMap = new Map();
let maxFreq = 0;

numbers.forEach(num => {
  const freq = (freqMap.get(num) || 0) + 1;
  freqMap.set(num, freq);
  if (freq > maxFreq) maxFreq = freq;
});

const freqList = [];
freqMap.forEach((value, key) => {
  if (value === maxFreq) freqList.push(key);
});
freqList.sort((a, b) => a - b);

const mode = freqList.length >= 2 ? freqList[1] : freqList[0];

const range = numbers[numbers.length - 1] - numbers[0];

console.log(average);
console.log(median);
console.log(mode);
console.log(range);
