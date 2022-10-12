const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const errmsg = `🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  const passmsg = `✅ Assertion Passed: ${arr1} === ${arr2}`;
  if (eqArrays(arr1, arr2) === true) {
    console.log(passmsg);
  } else if (eqArrays(arr1, arr2) === false) {
    console.log(errmsg);
  }
};

module.exports = assertArraysEqual;


