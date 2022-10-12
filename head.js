const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9,10,11]), 10);
assertEqual(head(["Lighthouse", "Hello", "Labs"]), "Hello");
assertEqual(head([]), "Hello");