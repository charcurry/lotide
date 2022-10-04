const assertEqual = function(actual, expected) {
  const errmsg = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passmsg = `✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passmsg);
  } else {
    console.log(errmsg);
  }
};

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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([],[]), true);
assertEqual(eqArrays(["Word"],["Word"]), true);


//for this function i should change the arrLength i made into an if statement that just fails if they are not the same length