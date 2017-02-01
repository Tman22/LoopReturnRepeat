var { assert } = require('chai');
var { stringSubset } = require('../lib/extra.js');

describe('extra problem', function() {
  it.skip('write program which returns a subset of a string', function() {
    // Sample Data : dog
    // Expected Output : ["d", "do", "dog", "o", "og", "g"]

    const expected = ["d", "do", "dog", "o", "og", "g"];

    assert.deepEqual(stringSubset('dog'), expected);
  });
});
