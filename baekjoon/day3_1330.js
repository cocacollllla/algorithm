// https://www.acmicpc.net/problem/1330

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(a>b){
    console.log('>')
}else if(a<b){
    console.log('<')
}else{
    console.log('==')
}

/*

백준에서 node.js 로 풀 때

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

해줘야 함.



//파일을 읽어오기 위해 Node.js의 built-in file system module인 fs 사용.
var fs = require('fs');

// 경로에 있는 파일을 읽어와서 그 내용을 input에 저장. 읽어온 내용은 array로 저장이 되기때문에 toString().split(' ') 해줌
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

*/