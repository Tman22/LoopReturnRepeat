var assert = require('chai').assert;
var { findStuff, sortStuff, filterStuff,
      indexStuff, reverseString } = require('../lib/ironFE.js');

describe('IronFE', function() {

  it.skip('should find', function() {
    var array = [12, 5, 8, 130, 8, 44]
    assert.equal(findStuff(8, array), 8);
  });

  it.skip('should filter', function() {
    var array = [12, 5, 8, 130, 8, 44]
    assert.deepEqual(filterStuff(8, array), [8,8]);
  });

  // find, filter, find objects, sort, indexOf, for loops -1
  it.skip('should sort', function() {
    var array = [12, 5, 8, 130, 8, 44]
    assert.deepEqual(sortStuff(array), [ 5, 8, 8, 12, 44, 130 ]);
  });

  it.skip('should indexOf', function() {
    var array = [12, 5, 8, 130, 8, 44]
    assert.equal(indexStuff(130, array), 3);
  });

  it('should reverse string using forEach', function() {
    assert.equal(reverseString('hello'), 'olleh');
  });

});
