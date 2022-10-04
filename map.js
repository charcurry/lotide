
const eqArrays = function(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    arrLength = arr1.length;
  } else if (arr2.length > arr1.length) {
    arrLength = arr2.length;
  }
  let bool = true;
  for (let i = 0; i < arrLength; i++) {
    if (arr1[i] === arr2[i]) {
      bool = true;
    } else {
      bool = false;
    }
  } return bool;
};

const assertArraysEqual = function(arr1, arr2) {
  const errmsg = `🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  const passmsg = `✅ Assertion Passed: ${arr1} === ${arr2}`;
  if (eqArrays(arr1, arr2) === true) {
    console.log(passmsg);
  } else if (eqArrays(arr1, arr2) === false) {
    console.log(errmsg);
  }
};

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