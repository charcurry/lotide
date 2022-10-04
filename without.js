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

const without = function(source, itemsToRemove) {
  // let newArr = [...source];
  // let removeIndex = []
  // for (let i = 0; i < newArr.length; i++) {
  //   for (let y = 0; y < itemsToRemove.length; y++) {
  //     if (newArr[i] === itemsToRemove[y]) {
  //       removeIndex.push(i);
  //     }
  //   }
  // } for (let x = removeIndex.length - 1; x >= 0; x--) {
  //   newArr.splice(removeIndex[x], 1)
  // }
  // return newArr;
  return source.filter(element => !itemsToRemove.includes(element));
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]), ["1"]); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], ["3", "2", "1"]), []);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]); // => [2, 3]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//make another new array for indexes where i want to splice

//newArr.splice(i, 1)

//filter and include array prototype; spread operator