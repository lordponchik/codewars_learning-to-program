/**

Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

findShort("bitcoin take over the world maybe who knows perhaps"), 3)
*/
// complete the function
function findShort(s) {
  const array = s.split(' ');
  let minValueStr = array[0].length;

  for (const val of array) {
    if (val.length >= minValueStr) {
      continue;
    }
    minValueStr = val.length;
  }
  return minValueStr;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); //(camel Casing);
