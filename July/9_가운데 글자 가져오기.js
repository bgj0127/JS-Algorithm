//가운데 글자 가져오기 - 프로그래머스 코딩테스트
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  var answer = "";
  var tmp = 0;
  if (s.length % 2 == 0) {
    answer = s[Math.ceil(s.length / 2)] + answer;
    answer = s[Math.ceil(s.length / 2) - 1] + answer;
  } else {
    answer = s[Math.ceil(s.length / 2) - 1];
  }

  return answer;
}
