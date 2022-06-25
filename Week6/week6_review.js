// 드림코딩 배열 함수
// 1. join()
const fruits = ["apple", "banana", "orange"];
console.log(fruits.join()); // 'apple,banana,orange'
console.log(fruits.join("")); // 'applebananaorange'
console.log(fruits.join(", ")); // 'apple, banana, orange'
console.log(fruits.join("|")); // 'apple|banana|orange'

// 2. split()
const fruitsString = "🍎,🍏,🍊,🍓";
console.log(fruitsString.split()); // ["🍎,🍏,🍊,🍓"]
console.log(fruitsString.split(",")); // [ '🍎', '🍏', '🍊', '🍓' ]
console.log(fruitsString.split(",", 2)); // [ '🍎', '🍏' ]

// 3. reverse()
const reverse = [1, 2, 3, 4, 5];
console.log(reverse.reverse()); // [ 5, 4, 3, 2, 1 ]

// 4. splice() and slice()
const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(0, 2, 100);
console.log(arrSplice); // [100, 3, 4, 5];

const arrSlice = [1, 2, 3, 4, 5];
arrSlice.slice(1, 4); // [2, 3, 4]

// 5. find()
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

students.find((student) => student.score === 90);

// 6. filter()
students.filter((student) => student.enrolled === true);

// 7. map()
students.map((student) => student.score);

// 8. some()
students.some((student) => student.score < 50);

// 9. reduce()
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

const sum = students.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);

console.log(sum / students.length);

// 10. method chaining
students.map((student) => student.score).join();
students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();

// getter and setter
class Square {
  #length;

  constructor(length) {
    this.length = length;
  }

  get length() {
    return this.#length;
  }

  get perimeter() {
    return this.#length * 4;
  }

  get area() {
    return this.#length * this.#length;
  }

  set length(length) {
    if (length <= 0) {
      throw "길이는 0보다 커야 합니다.";
    }
    this.#length = length;
  }
}

// fetch
const getText = new Promise((resolve, reject) => {
  fetch("https://codingapple1.github.io/hello.txt")
    .then((res) => res.text())
    .then((data) => resolve(data));
});

getText.then((data) => console.log(data));
