const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const singleArr = [1];
const x = tail(singleArr);
assertEqual(x , []);


const blankArr = [];
const y = tail(blankArr);
assertEqual(y , []);

// console.log(tail([]));
// console.log(tail(["Hello"]));