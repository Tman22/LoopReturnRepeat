var { assert } = require('chai');
var { displayThis, addNewItem, addItems, makeArrayObjs } = require('../lib/group1.js');

describe('Object Station 1', function() {

  it.skip('should create an array of strings', function() {
    const obj = { kale: 12, apple: 5 };
    const array = ['kale', 'apple'];

    const answer = ['12 and kale','5 and apple'];

    assert.deepEqual(displayThis(obj, array), answer);
  });

  it.skip('should add new item', function() {
    const obj = { kale: 12, apple: 5 };

    const answer = { kale: 12, apple: 5, avocado: 4 };

    assert.deepEqual(addNewItem(obj, { avocado: 4 }), answer);
    assert.deepEqual(obj, answer);
  });

  it.skip('should make an array of objs', function() {
    const obj = { kale: 12, apple: 5, orange: 1 };

    const answer = [{ kale: 12 }, { apple: 5 }, { orange: 1 }];

    assert.deepEqual(makeArrayObjs(obj), answer);
    assert.deepEqual(obj, answer);
  });

  it.skip('should add items to apple', function() {
    const obj = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };

    const answer = { kale: 12, apple: 9, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };
    assert.deepEqual(addItems(obj, 'apple', 4), answer);
  });

})
