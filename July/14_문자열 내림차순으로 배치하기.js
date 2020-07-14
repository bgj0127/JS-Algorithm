//출처 - 프로그래머스 코딩 테스트

//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  var answer = "";
  answer = [...s];
  answer = answer.sort(comp);
  answer = answer.join("");
  return answer;
}

function comp(a, b) {
  if (a > b) return -1;
  if (b > a) return 1;
  return 0;
}
