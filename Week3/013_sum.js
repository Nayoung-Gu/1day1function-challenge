// 각 자리수의 합

// for 반복문
let num = "12345";
let sum = 0;

for (let i = 0; i < num.length; i++) {
  result += parseInt(num[i]);
}

// while 반복문
while (num) {
  sum += num % 10;
  num2 = Math.floor(num / 10);
}
