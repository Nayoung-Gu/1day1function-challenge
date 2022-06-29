// index.js
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

// App.js
import React, { useState } from "react";
import Timer from "./Timer";

export default function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

// Timer.js
import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다");
    };
  }, []);

  return (
    <div>
      <span>타이머 시작. 콘솔을 확인하세요!</span>
    </div>
  );
};

export default Timer;