// 1_React to-do list
// https://codesandbox.io/s/react-to-do-list-s53sry

// 2_Fruit
const array = ["🍌", "🍓", "🍇", "🍓"];

function replace(arr, from, to) {
  const newArr = Array.from(arr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === from) {
      newArr[i] = to;
    }
  }
  return newArr;
}

// 3_React sort
// https://codesandbox.io/s/react-sort-name-7lcibm

// 4_Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// 5_Random Number
function random(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
