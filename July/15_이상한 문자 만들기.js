//프로그래머스 - 코딩테스트
//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
//문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
//첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
  var answer = "";
  let sArr = s.split("");
  let arrUp = [];
  let arrDown = [];
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    arrDown.push(String.fromCharCode(i));
  }
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    arrUp.push(String.fromCharCode(i));
  }
  sArr.map((e, i) => {
    if (e === " ") {
      answer += " ";
    } else if (i === 0) {
      answer += e.toUpperCase();
    } else if (sArr[i - 1] === " ") {
      answer += e.toUpperCase();
    } else if (arrDown.includes(answer[i - 1])) {
      answer += e.toUpperCase();
    } else if (arrUp.includes(answer[i - 1])) {
      answer += e.toLowerCase();
    }
  });

  return answer;
}
