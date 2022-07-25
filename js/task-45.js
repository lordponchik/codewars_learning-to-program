/*
Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
  // your code here
  return array.length === 0 ? 0 : array.reduce((x, y) => x + y) / array.length;
}

console.log(find_average([1, 1, 1])); // 1
console.log(find_average([1, 2, 3, 4])); // 2.5
console.log(find_average([])); //0
console.log(find_average([42, 6, 31, 24, 66, 87, 100, 38, 6])); //44, 44444444444444;
