// 할인가 계산기
// 첫 번째 인자는 가격, 두 번째 인자는 첫구매 여부
// 10% 할인가를 계산해주는 함수, 첫구매면 1.5달러 추가 할인

function cal(a, b) {
  let discount = a * 0.1;
  if (b == false) {
    let output = a - discount;
    return parseFloat(output.toFixed(2));
  } else if (b == true) {
    let output = a - discount - 1.5;
    return parseFloat(output.toFixed(2));
  }
}

console.log(typeof cal(70, false)); //number
console.log(cal(70, false)); //63
console.log(cal(10.3, true)); //7.77
