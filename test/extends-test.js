var assert = require('chai').assert;
var { Sum } = require('../lib/scoping/extends.js');

describe('Extends', function() {

  it.skip('should find Sum', function() {
    assert(Sum);
  });

  it.skip('should find Sum', function() {
    var sum = new Sum()
    assert.equal(sum.findSum(8, 2), 10);
  });

});
