/* Create a function called randomRange 
that takes a range myMin and myMax and returns a random whole number 
that's greater than or equal to myMin, and is less than or equal to myMax, inclusive. */

function randomNum(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
