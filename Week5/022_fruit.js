// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const array = ["🍌", "🍓", "🍇", "🍓"];

function replace(array, from, to) {
  const newReplace = Array.from(array);
  for (let i = 0; i < newReplace.length; i++) {
    if (newReplace[i] === from) {
      newReplace[i] = to;
    }
  }
  return newReplace;
}

replace(array, "🍓", "🥝");
