var assert = require('chai').assert;
var { sort, forEachSort} = require('../lib/sort.js');

describe('IronFE - Reverse', function() {

  it('should use sort', function() {
    var array = [48, 3, 89, 12, 30, 28, 12, 9];

    assert.deepEqual(sort(array), [3, 9, 12, 12, 28, 30, 48, 89]);
  });

  it('should use forEach', function() {
    var array = [9, 3, 12];

    assert.deepEqual(forEachSort(array), [3, 9, 12]);
  });

  it.skip('should use forEach', function() {
    var array = [48, 3, 89, 12, 30, 28, 12, 9];

    assert.deepEqual(forEachSort(array), [3, 9, 12, 12, 28, 30, 48, 89]);
  });

});
