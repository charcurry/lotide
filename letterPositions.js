const assertArraysEqual = require('./assertArraysEqual')


const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (letter of sentence) {
    if (letter === " ") {
      i++;
      continue;
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    } i++;
  } return results;
};



letterPositions("lighthouse in the house");

// answer =
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

const sentenceExample = "lighthouse in the house";

const result1 = letterPositions(sentenceExample);

assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["i"], [1, 11]);
assertArraysEqual(result1["g"], [2]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;

