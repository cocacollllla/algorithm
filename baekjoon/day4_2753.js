// https://www.acmicpc.net/problem/2753

var fs = require('fs');
var year = fs.readFileSync('/dev/stdin');

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(1)
}else{
  console.log(0)
}
