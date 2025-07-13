const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(v => v.split(' ').map(v=>+v));

const n=input[0].shift()
const m=input[0].shift()

const array=input[1]

let allSum=[0]
array.forEach((v,i)=>{
    allSum[i+1]=allSum[i]+v
})
allSum.shift()

let answer=[]
for(let i=0;i<m;i++){
    let left=input[i+2][0]
    let right=input[i+2][1]
    if(left-2<0){
        answer.push(allSum[right-1]) 
        continue
    }
    answer.push(allSum[right-1]-allSum[left-2])
}

console.log(answer.join("\n"))
