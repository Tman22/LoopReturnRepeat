var assert = require('chai').assert;
var { Sum } = require('../lib/scoping/extends.js');

describe('Extends', function() {

  it.skip('should extend functions from Equations', function() {
    assert(Sum);
  });

  it.skip('should calculate the Sum', function() {
    var sum = new Sum()
    assert.equal(sum.findSum(8, 2), 10);
  });

});
