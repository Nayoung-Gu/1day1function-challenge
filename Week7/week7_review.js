// Promise
// 1번
const urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/Violet-Bora-Lee",
    "https://api.github.com/users/Nayoung-Gu",
    "https://api.github.com/asdasdasdasd",
];

let requests = urls.map((url) => fetch(url));

Promise.all(requests).then((responses) =>
    responses.forEach((response) =>
        console.log(`${response.url} : ${response.status}`)
    )
);

// 2번
const image = document.getElementById("test");

const loadImage = new Promise((resolve, reject) => {
    image.addEventListener("load", () => resolve());
    image.addEventListener("error", () => reject());
});

loadImage
    .then(() => console.log("로딩 성공"))
    .catch(() => console.log("로딩 실패"));

// 3번
const loadData = async () => {
    try {
        const url1 = "https://jsonplaceholder.typicode.com/todos/1";
        const url2 = "https://jsonplaceholder.typicode.com/todos/2";
        const url3 = "https://jsonplaceholder.typicode.com/todos/3";

        const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);

        const dataPromises = results.map(result => result.json());
        const finalData = await Promise.all(dataPromises);
        console.log(finalData);
    } catch(err) {
        console.log(err)
    }
}

// 4번
async function loadJson(url){
    const response = await fetch(url);

    if(response.status == 200){
        const json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

// React_타이머 만들기
// App.js
import {useState} from 'react';
import Timer from './Timer';

export default function App(){
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {showTimer && <Timer/>}
            <button onClick={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
}

// Timer.js
import {useEffect} from 'react';

export default function Timer (){
    useEffect(() => {
        const timer = setInterval(()=> {
            console.log("타이머 돌아가는 중...")
        }, 1000);

        return ()=> {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다')
        }
    }, [])

    return (
        <div>
            <span>타이머 시작! 콘솔을 확인하세요.</span>
        </div>
    )
}