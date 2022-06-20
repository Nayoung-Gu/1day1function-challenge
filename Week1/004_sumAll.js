// a부터 b까지 합 구하기
function sumAll(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`);

// a부터 b까지 곱 구하기
function multiAll(a, b) {
  let result = 1;
  for (let i = a; i <= b; i++) {
    result *= i;
  }
  return result;
}

console.log(`1부터 5까지의 곱: ${multiAll(1, 5)}`);
console.log(`1부터 10까지의 곱: ${multiAll(1, 10)}`);
