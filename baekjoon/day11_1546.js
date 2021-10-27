var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var num = parseInt(input[0]);
let numArr = input[1].split(' ');

let numMax = Math.max(...numArr);
let newArry = [];
for(i=0; i<numArr.length; i++){
  newArry.push(numArr[i]/numMax*100);
}

let sum = newArry.reduce((a,b) => (a+b));
console.log(sum/newArry.length);