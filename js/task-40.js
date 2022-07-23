/**
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 89 is the first integer with more than one digit that fulfills the property partially
 introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range 
[a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!
 */
// complete the function
/*
function sumDigPow(a, b) {
  let num;
  const arr = [];
  for (a; a <= b; a += 1) {
    if (a > 0 && a < 10) {
      arr.push(a);
    } else if (a >= 10 && a < 100) {
      num = a
        .toString()
        .split('')
        .map(el => Number(el));

      if (num[0] + Math.pow(num[1], 2) === a) {
        arr.push(a);
      }
    } else if (a >= 100 && a < 1000) {
      num = a
        .toString()
        .split('')
        .map(el => Number(el));

      if (num[0] + Math.pow(num[1], 2) + Math.pow(num[2], 3) === a) {
        arr.push(a);
      }
    }
  }
  return arr;
}
*/
function sumDigPow(a, b) {
  let total = 0;
  let num = [];
  const arrResult = [];

  for (a; a <= b; a += 1) {
    total = 0;
    let powNum = 1;

    num = a
      .toString()
      .split('')
      .map(el => Number(el));
    for (let i = 0; i < num.length; i += 1) {
      total += Math.pow(num[i], powNum);
      powNum += 1;
    }
    if (total === a) {
      arrResult.push(a);
    }
  }
  return arrResult;
}

console.log(sumDigPow(1, 11)); //
console.log(sumDigPow(1, 100)); //
console.log(sumDigPow(1, 100000)); //
