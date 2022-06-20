import { useState } from "react";

function App() {
  let [language, setLanguage] = useState([
    "파이썬",
    "자바스크립트",
    "자바",
    "코틀린",
    "루비",
    "스위프트",
  ]);
  const onClick = () => {
    const copy = [...language];
    copy.sort();
    setLanguage(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h3>언어 정렬하기</h3>
      </div>

      {language.map((a, i) => {
        return (
          <div className="list">
            <h4>{language[i]}</h4>
          </div>
        );
      })}

      <button onClick={onClick}>정렬</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
