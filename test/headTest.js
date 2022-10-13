const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it('returns "Lighthouse" for ["Lighthouse", "Hello", "Labs"]', () => {
    assert.strictEqual(head(["Lighthouse", "Hello", "Labs"]), 'Lighthouse'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });
  it("returns '9' for [9,10,11]", () => {
    assert.strictEqual(head([9,10,11]), 9); 
  });
});