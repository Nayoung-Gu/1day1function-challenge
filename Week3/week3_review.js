// 1. 요일 확인 함수
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function checkDay(a, b) {
  const theDay = new Date(`2022-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

checkDay(6, 4);

// 2, 2진수 변환
// 1_while 반복문
let dec = 160;
let arrBinary = [];

while (dec) {
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2);
}

console.log(arrBinary.reverse().join(""));

// 2_toString
console.log(dec.toString(2));

// 3. 각 자리수의 합
// 1_for 반복문
let num = "12345";
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}

// 2_while 반복문
while (num) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

// Promise (🐓, 🥚, 🍳)
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

// 영희 있어요?
let 출석부 = ["흥민", "영희", "철수", "재석", "영희"];

function isName(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log(`${name} 있어요!`);
      return;
    }
  }
}

isName("영희");
