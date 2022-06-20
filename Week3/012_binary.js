// 10진수를 2진수로
// 입력받은 숫자를 2진수로 바꾸고 그 값을 출력해주세요. (160 -> 10100000)

// 방법 1
let dec = 160;
let arrBinary = [];

while (dec) {
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2);
}

console.log(arrBinary.reverse().join(""));

// 방법 2
console.log(dec.toString(2));
