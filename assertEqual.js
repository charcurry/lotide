const assertEqual = function(actual, expected) {
  const errmsg = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  const passmsg = `✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passmsg);
  } else {
    console.log(errmsg);
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse" , "Lighthouse");
assertEqual(1 , 3);