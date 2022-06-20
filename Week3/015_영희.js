let 출석부 = ["흥민", "영희", "철수", "재석", "영희"];

function isName(name) {
  for (let i = 0; i <= 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log(`${name} 있어요!`);
      return;
    }
  }
}

isName("영희");
