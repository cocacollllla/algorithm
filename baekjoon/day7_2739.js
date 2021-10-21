// https://www.acmicpc.net/problem/2739

var fs = require('fs');
var input = fs.readFileSync('text.txt').toString();
var multip = parseInt(input);

for(let i = 1; i < 10; i++) {
    console.log(multip , '*' , i , '=' , multip * i);
}