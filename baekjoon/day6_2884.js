// https://www.acmicpc.net/problem/2884

var fs = require('fs');
var input = fs.readFileSync('text.txt').toString().split(' ');
var hour = parseInt(input[0]);
var min = parseInt(input[1]);

if(min < 45){
    console.log(hour === 0 ? hour = 23 : hour-=1, min+=15);
}else{
    console.log(hour, min-=45);
}
