// https://www.acmicpc.net/problem/8393

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var num = parseInt(input);

let sum = 0;
for(i=0; i<=num; i++){
    sum = sum + i;
}
console.log(sum);
