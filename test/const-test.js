var assert = require('chai').assert;
var { fun1, fun2 } = require('../lib/scoping/const.js');

describe('Scoping problem Class Declaration', function() {

  it('should find function', function() {
    assert(fun1);
  });

  it('should add num to each number', function() {
    assert.deepEqual(fun1.array([1,2,3]), [2,3,4]);
  });

  it('should add num to each number', function() {
    assert.deepEqual(fun2.array([1,2,3]), [3,4,5]);
  });

  it('should add ! to end of string', function() {
    const string = 'Woot';
    string = fun1.string(string);
    assert.equal(string , "Woot!");
  });

  it('should take 2 strings and return object', function() {
    const string1 = 'left';
    const string2 = 'right';
    assert.deepEqual(fun1.object(string1, string2), {1: string1, 2: string2 });
  });

});
