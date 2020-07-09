//문자열 다루기 기본 - 프로그래머스 코딩 테스트

//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

function solution(s) {
  var answer = false;
  if (s.length == 4 || s.length == 6) {
    if (Number(s)) {
      answer = true;
    }
  }
  //지수 예외처리 하기 위해서 작성
  if (s.indexOf("e") != -1) {
    answer = false;
  }
  return answer;
}
