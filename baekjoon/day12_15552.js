// https://www.acmicpc.net/problem/15552

const input = require('fs').readFileSync('text.txt').toString().split('\n');
let result = '';
for(let i = 1; i <= input[0]; i++) {
    let zz = input[i].split(' ');
    result += parseInt(zz[0]) + parseInt(zz[1]) + '\n';
}

console.log(result);