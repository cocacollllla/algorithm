// https://www.acmicpc.net/problem/2908

const input = require('fs').readFileSync('text.txt').toString().split(' ');

let newArr = [];
for(let i=0; i<input.length; i++){
    let tesz = input[i].split('').reverse().join('');
    newArr.push(parseInt(tesz));
}

console.log(newArr[0] > newArr[1] ? newArr[0] : newArr[1]);