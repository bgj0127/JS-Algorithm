//같은 숫자는 싫어 - 프로그래머스 코딩 테스트

//배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다

function solution(arr) {
  var answer = [];
  var idx = 1; // answer배열의 인덱스
  answer[0] = arr[0]; //첫번째는 무조건 가능
  for (var i = 1; i < arr.length; i++) {
    //arr배열의 이전 인덱스의 값과 다를 때만 answer배열에 삽입 후 인덱스 증가
    if (arr[i - 1] !== arr[i]) {
      answer[idx] = arr[i];
      idx++;
    }
  }
  return answer;
}

/* 사실 매우 간단하게 풀 수 있다. 자바스크립트의 filter()함수를 사용하는 것이다. 

function solution(arr)
{
  return arr.filter((val,index) => val != arr[index+1]);
}
*/

var n = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(n));
