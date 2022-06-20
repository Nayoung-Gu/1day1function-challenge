// 호준이의 아르바이트
// 1~3위 학생에게 줄 사탕의 개수를 출력하시오 (중복 가능)

const scores = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

// 성적 오름차순 정리
scores.sort((a, b) => a - b);

// top3의 점수 배열
let top3 = [];
// 사탕 받는 사람의 수
let count = 0;

// 3등의 동점자 카운트를 위해 3 -> 4
while (top3.length < 4) {
  let value = scores.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

// 첫 번째 4등 학생 -1
console.log(count - 1);
