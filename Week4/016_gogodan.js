// 인자로 받은 숫자의 구구단 출력
function gogodan(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
}

// 모든 구구단 출력
function gogodan() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
}
