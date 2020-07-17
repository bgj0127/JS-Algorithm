//프로그래머스 - 코딩테스트
//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
//예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  var answer = 0;
  if (a > b) {
    var tmp = a;
    a = b;
    b = tmp;
  }
  for (var i = a; i <= b; i += 1) {
    answer += i;
  }
  return answer;
}
