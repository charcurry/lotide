const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        arr.push(array[i][x]);
      }
    } else {
      arr.push(array[i]);
    }
  } return arr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([3, 4, 6, [7, 9], 10, 12]), [3, 4, 6, 7, 9, 10, 12]);

module.exports = flatten;