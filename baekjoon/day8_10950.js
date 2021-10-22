// // https://www.acmicpc.net/problem/10950

const input = require('fs').readFileSync('text.txt').toString().split('\n');
// const n = input[0];
// const n_arr = input.slice(1, n+1);
// const [m, ...m_arr] = input.slice(n+1);




for(let i = 1; i <= input[0]; i++) {
   
    // console.log(parseInt(input[i][0]) + parseInt(input[i][1]));
    // console.log(parseInt(input[i][0]), parseInt(input[i]))
    let zz = input[i].split(' ');
    // console.log(parseInt(zz[i][0]) + parseInt(zz[i][1]));
    console.log(parseInt(zz[0]) + parseInt(zz[1]));
    
}