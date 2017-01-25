var assert = require('chai').assert;
var { sum1 } = require('../lib/scoping/class_declaration.js');

describe('Scoping problem Class Declaration', function() {

  it.skip('should find function', function() {
    assert(sum1);
  });

  it.skip('should find Sum', function() {
    assert.equal(sum1.array([1,2,3]), 6);
  });

});
