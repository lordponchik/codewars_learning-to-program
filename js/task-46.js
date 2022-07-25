/*
Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  const arr = [];

  for (n; n > 0; n -= 1) {
    arr.push(n);
  }
  return arr;
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
