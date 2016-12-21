var assert = require('chai').assert;
var { reverse, forEachReverse, mapReverse, reduceReverse,
      forReverse, forLoopReverse, whileReverse } = require('../lib/reverse.js');

describe('IronFE - Reverse', function() {

  it('should use reverse', function() {
    assert.equal(reverse('hello'), 'olleh');
  });

  it('should use forEach', function() {
    assert.equal(forEachReverse('hello'), 'olleh');
  });

  it('should use map', function() {
    assert.equal(mapReverse('hello'), 'olleh');
  });

  it('should use reduce', function() {
    assert.equal(reduceReverse('hello'), 'olleh');
  });

  it('should use for loop', function() {
    assert.equal(forReverse('hello'), 'olleh');
  });

  it('should use a for loop without arrays', function() {
    assert.equal(forLoopReverse('hello'), 'olleh');
  });
// iterate over object to make array of objects using reduce.

  it('should use while loop', function() {
    assert.equal(whileReverse('hello'), 'olleh');
  });

});
