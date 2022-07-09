// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str) {
  const array = str.split('');
  const invertedArray = [];

  for (const arr of array) {
    invertedArray.unshift(arr);
  }
  const newStr = invertedArray.join('');
  return console.log(newStr);
}

solution('hallo');
