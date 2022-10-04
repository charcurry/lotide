const assertEqual = function(actual, expected) {
  const errmsg = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passmsg = `✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passmsg);
  } else {
    console.log(errmsg);
  }
};

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key]) === true) {
      return key
    } else if (callback(object[key]) === false) {
      continue
    }
  }
}

// let findNoma = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"


// const findKeyByValue = function(object, value) {
//   let keys = Object.keys(object);
//   for (let key of keys) {
//     if (object[key] === value) {
//       return key;
//     }
//   }
// };

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")
assertEqual(findKey({ d: ["2", 3], c: "1" }, x => x === "1"), "c")
assertEqual(findKey({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }, x => x === false), "Agouhanna")