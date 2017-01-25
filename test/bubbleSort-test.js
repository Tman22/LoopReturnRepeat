var assert = require('chai').assert;
var bubbleSort = require('../lib/bubbleSort.js');

describe('IronFE', function() {

  it('should sort basic array', function() {
    var array = [1,2,3,4];
    var answer = [1,2,3,4];
    assert.deepEqual(bubbleSort(array), answer);
  });

  it('should sort basic array', function() {
    var array = [5,4,3,2,1];
    var answer = [1,2,3,4,5];
    assert.deepEqual(bubbleSort(array), answer);
  });

});
