const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let bool = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        bool = true;
      } else {
        bool = false;
      }
    } return bool;
  }
};

module.exports = eqArrays;


