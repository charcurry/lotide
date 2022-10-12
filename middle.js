const middle = function(array) {
  let output = [];
  { if (array.length === 1 || array.length === 2) {
    output = [];
  } else if (array.length % 2 === 0) {
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else if (array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
  }
  } return output;
};

module.exports = middle;