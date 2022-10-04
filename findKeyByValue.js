const assertEqual = function(actual, expected) {
  const errmsg = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passmsg = `✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passmsg);
  } else {
    console.log(errmsg);
  }
};

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object)
  for (let key of keys) {
    if (object[key] === value) {
      return key
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);