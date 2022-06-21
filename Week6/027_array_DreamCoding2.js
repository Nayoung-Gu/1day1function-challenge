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

// 05. find a student with the score 90
students.find((student) => student.score === 90);

// 06. make an array of enrolled studends
students.filter((student) => student.enrolled === true);

// 07. make an array containing only the students' scores result sould be : [45, 80, 90, 66, 88]
students.map((student) => student.score);

// 08. check if there is a student with the score lower than 50
students.some((student) => student < 50);
