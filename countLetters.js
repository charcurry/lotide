const assertEqual = function(actual, expected) {
  const errmsg = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passmsg = `✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passmsg);
  } else {
    console.log(errmsg);
  }
};

const countLetters = function(sentence) {
  let result = {}
  for (letter of sentence) {
    if (letter === " ") {
      continue
    } else if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } return result
}

//console.log(countLetters("lighthouse in the house"))

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

const sentenceExample = "lighthouse in the house"

const result1 = countLetters(sentenceExample);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["z"], undefined);