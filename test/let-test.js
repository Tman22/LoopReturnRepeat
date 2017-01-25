var assert = require('chai').assert;
var { letFun1 } = require('../lib/scoping/let.js');

describe('Scoping problem let ', function() {

  it.skip('should find function', function() {
    assert(letFun1);
  });

  it.skip('should find return 2', function() {
    assert.equal(letFun1.first(), 2);
  });

  it.skip('should return array with 10 in it', function() {
    assert.deepEqual(letFun1.second(true), [10]);
  });

  it.skip('should return out of function if conditional is true with array.length + num', function() {
    var array = [1,2,3,4,5];
    assert.deepEqual(letFun1.third(array), 8);
  });

});
