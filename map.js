const assertArraysEqual = require('./assertArraysEqual')

const numbers = [1, 2, 3, 4, 5, 6];
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(numbers, number => number * 3), [3, 6, 9, 12, 15, 18]);
assertArraysEqual(map(numbers, number => number % 2 === 0), [false, true, false, true, false, true]);

module.exports = map;