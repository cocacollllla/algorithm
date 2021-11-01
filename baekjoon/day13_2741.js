// https://www.acmicpc.net/problem/2741

const input = require('fs').readFileSync('text.txt').toString();
let result = parseInt(input);
let result2 = '';

for(let i = 1; i <= result; i++) {
    result2 += i+0 + '\n';
}
console.log(result2)


