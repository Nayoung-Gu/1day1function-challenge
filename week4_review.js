// 1_구구단
function gogodan(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${a} X ${x} = ${a * i}`);
  }
}

function gogodan() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
}

// 2_ 평균점수 계산기
function cal(arr, b) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  if (result / arr.length > b) {
    console.log(`${result / arr.length - b}만큼 떨어졌네요`);
  } else {
    console.log(`${b - result / arr.length}만큼 올랐네요!`);
  }
}

// 3_리액트로 시계 만들기
function Clock() {
  return (
    <div>
      <h1>리액트로 시계 만들기</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);

// 4_리액트로 댓글 컴포넌트 만들기
function Comment(props) {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
      </div>
      <div>
        <span>{props.name}</span>
        <span>{props.comment}</span>
      </div>
    </div>
  );
}

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById("root")
);

// 5_ 할인가 계산기
function cal(a, b) {
  let discount = a * 0.1;
  if (b == false) {
    let output = a - discount;
    return parseFloat(output.toFixed(2));
  } else {
    output = a - discount - 1.5;
    return parseFloat(output.toFixed(2));
  }
}
