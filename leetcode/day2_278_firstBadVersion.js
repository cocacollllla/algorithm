// https://leetcode.com/problems/first-bad-version/

var solution = function(isBadVersion) {
  return function(n) {

    let left = 1; 
    let right = n;

    while(left < right) {
      const mid = left + Math.floor((right-left)/2);
      if(isBadVersion(mid)) {
        right = mid
      }else{
        left = mid+1
      }
    }
    return left
  }
}

/*

n = 5
isBadVersion = 4

일때, 1 2 3 4 5 버전 중 4,5는 나쁜버전이다.
api호출을 최소한으로 해야하기 때문에 반으로 나눠 mid point를 찾아 mid의 나쁜버전여부를 찾아야 한다.
mid가 나쁜버전이라면 mid 이전의 버전에 나쁜버전이 있다는 말이기 때문에 mid가 다시 right가 되어 1부터 right까지 다시 검사하고
mid가 나쁜버전이 아니라면 mid 이후의 버전에 나쁜버전이 있다는 말이기 때문에 mid + 1 부터 right 까지 다시 검사한다.

가운데 찾기 공식 = left + Math.floor((right-left)/2)

left = 1 ,  right = 5 이기 때문에 mid point 는 3
if(isBadVersion(mid)) mid가 나쁜버전이라면 right = mid 가 되어 
while(1 < 3) 다시 반복되어 검사한다.
만약 mid가 나쁜버전이 아니라면 left = mid + 1 이 되어
while(4 < 5) 다시 반복되어 검사한다.

예제로 검사했을 때 mid 는 나쁜버전이 아니므로 left = mid + 1 이 되어
4 5 를 두고 다시 검사한다.

그러면 mid 는 4가 되고 4는 나쁜버전이므로 while문에서 빠져나와 left를 리턴한다.

*/