// // https://www.acmicpc.net/problem/10950

const input = require('fs').readFileSync('text.txt').toString().split('\n');

for(let i = 1; i <= input[0]; i++) {
    let zz = input[i].split(' ');
    console.log(parseInt(zz[0]) + parseInt(zz[1]));
}