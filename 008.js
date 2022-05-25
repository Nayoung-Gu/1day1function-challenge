// 반장 선거
// 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하세요.
// 예_ 혜원(이)가 총 4표로 반장이 되었습니다.

const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

for (let candidate of arr) {
  result[candidate] =
    result[candidate] === undefined ? 1 : (result[candidate] += 1);
}

winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 ${result[winner]}표로 반장이 되었습니다!`);
