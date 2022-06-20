// 1. 윤년 구하기
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year & (400 === 0);
}

// 2. 최솟값, 최댓값 구하는 함수
// 최솟값 구하기 (1) 반복문
const min1 = function (arr) {
  let result = arr[0];
  for (let value of arr) {
    if (value < result) {
      result = value;
    }
  }
  return result;
};

// 최솟값 구하기 (2) sort
const min2 = function (arr) {
  return arr.sort((a, b) => a - b)[0];
};

// 최댓값 구하기 (1) 반복문
const max1 = function (arr) {
  let result = arr[0];
  for (let value of arr) {
    if (value > result) {
      result = value;
    }
  }
  return result;
};

// 최댓값 구하기 (2) sort
const max2 = function (arr) {
  return arr.sort((a, b) => b - a)[0];
};

// 3. 간단한 투두 구현하기
class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }

  changeState() {
    this.finished = !this.finishesd;
  }
}

class TodoManager {
  constructor() {
    this.todos = [];
  }

  addItem(item, finished = false) {
    const todo = new Todo(item, finished);
    this.todos.push(todo);
  }

  getItems() {
    return this.todos;
  }

  getLeftTodoCount() {
    return this.todos.filter((item) => item.finished === false).length;
  }
}

// 4. a부터 b까지 합, 곱 구하기
// 4-1. 합 구하기
const sumAll = function (a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
};

// 4-2. 곱 구하기
const multiAll = function (a, b) {
  let result = 1;
  for (let i = a; i <= b; i++) {
    result *= i;
  }
  return result;
};

// 5. 가격 낮은순
let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 32000, title: "Check Shirt" },
  { id: 2, price: 15000, title: "Black Tie" },
  { id: 3, price: 67000, title: "Springfield Shirt" },
  { id: 4, price: 82000, title: "Red Mini Dress" },
];

const lowToHigh = function () {
  products.sort((a, b) => {
    return a.price - b.price;
  });
};
