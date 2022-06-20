// 1. 별 트리 그리기
const level = 5;

for (let i = 1; i <= level; i++) {
  console.log(" ".repeat(level - i) + "*".repeat(i * 2 - 1));
}

// 2. 로꾸꺼
const txt = "거꾸로";
let reverse = "";

for (let i = 0; i < txt.length; i++) {
  reverse = txt[i] + reverse;
}

console.log(txt.split("").reverse().join(""));

// 3. 반장 선거
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

// 4. 호준이의 아르바이트
const scores = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
let top3 = [];
let count = 0;

scores.sort((a, b) => a - b);

while (top3.length < 4) {
  let value = scores.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(count - 1);

// 5. 소수 판별
function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("NO");
      return false;
    }
  }
  if (n === 1) {
    console.log("NO");
    return false;
  }
  console.log("YES");
}

checkPrime(5);
checkPrime(6);
