const eqArrays = function(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    arrLength = arr1.length
  } else if (arr2.length > arr1.length) {
    arrLength = arr2.length
  }
  let bool = true
  for (let i = 0; i < arrLength; i++) {
    if (arr1[i] === arr2[i]) {
      bool = true
    } else {
      bool = false
    }
  } return bool
}

const assertArraysEqual = function(arr1, arr2) {
  const errmsg = `🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  const passmsg = `✅ Assertion Passed: ${arr1} === ${arr2}`;
  if (eqArrays(arr1, arr2) === true) {
    console.log(passmsg)
  } else if (eqArrays(arr1, arr2) === false) {
    console.log(errmsg)
  }
}

const middle = function(array) {
  let output = [];
  { if (array.length === 1 || array.length === 2) {
    output = [];
  } else if (array.length % 2 === 0) {
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else if (array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
  }
  } return output;
};



assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]