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
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])
assertArraysEqual([1, 2, 3], [1, 2, 3, 4])
assertArraysEqual([1, 2, 3, 4], [1, 2, 3])
assertArraysEqual([],[])
assertArraysEqual(["Word"],["Word"])


