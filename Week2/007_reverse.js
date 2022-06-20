// 로꾸꺼 (문장이 입력되면 거꾸로 출력하는 프로그램)

// 방법 1 : 반복문 활용
const txt = prompt("단어 혹은 문장을 입력하세요.");
let reverse = "";

for (let i = 0; i < txt.length; i++) {
  reverse = txt[i] + reverse;
}

console.log(reverse);

// 방법 2 : 메서드 활용
const str = "거꾸로";

console.log(str.split("").reverse().join(""));
