/**


Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  // your code
  const arr = s.toLowerCase().split('');
  const newArr = [];
  let str = ' ';

  for (let i = 0; i < arr.length; i += 1) {
    str = arr[i].toUpperCase();

    for (let j = 0; j < i; j += 1) {
      str += arr[i];
    }

    newArr.push(str);
  }

  return newArr.join('-');
}

console.log(accum('RqaEzty'));
