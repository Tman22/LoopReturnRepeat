var assert = require('chai').assert;
var { Sum } = require('../lib/scoping/static.js');

describe('Class static', function() {

  it('should find Sum', function() {
    assert(Sum);
  });

  it('should find Sum', function() {
    assert.equal(Sum.sum([1,2,3]), 6);
  });

  it('should find add ten to sum', function() {
    assert.equal(Sum.addTen([1,2,3]), 16);
  });

});
