var assert = require('chai').assert;
var { Sum } = require('../lib/scoping/static.js');

describe('Class static', function() {

  it.skip('should find Sum', function() {
    assert(Sum);
  });

  it.skip('should find Sum', function() {
    assert.equal(Sum.sum({'apple': 1, 'kale': 4, 'pear': 1}), 6);
  });

  it.skip('should find add ten to sum', function() {
    assert.equal(Sum.addTen({'apple': 1, 'kale': 4, 'pear': 1}), 16);
  });

});
