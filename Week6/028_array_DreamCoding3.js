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

// 09. compute student's average score
const scoreSum = students.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);

console.log(scoreSum / students.length);

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
students.map((student) => student.score).join();

// 11. make the above string with scores of more than 50
students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();

// Q. do Q.10 sorted in asending order and make it a string
// result should be: '45, 66, 80, 88, 90'
students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
