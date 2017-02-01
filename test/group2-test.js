var { assert } = require('chai');
var { foodCounter, createNewList, addList } = require('../lib/group2.js');

describe('Object Station 2', function() {

  it.skip('should combine both the arrays into one object using reduce', function() {
    const amount = [12, 5, 8, 130, 8, 44]
    const foodNames = ['kale', 'apple', 'orange', 'garlic',
                      'banana', 'avocado' ]

    const answer = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 }

    assert.deepEqual(foodCounter(foodNames, amount), answer);
  });


  it.skip('should add both objects using reduce', function() {
    const og = { kale: 12, apple: 5, orange: 8, garlic: 130,
               banana: 8, avocado: 44 };
    const add = { kale:2, apple: 1, orange: 3, garlic: 4,
                banana: 2, avocado: 3 };

    const answer = { kale: 14, apple: 6, orange: 11, garlic: 134,
                   banana: 10, avocado: 47 };

    assert.deepEqual(createNewList(og, add), answer);
    assert.notDeepEqual(og, answer);
  });

  it.skip('should add both objects together using forEach', function() {
    const og = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 4 };
    const add = { kale:2, apple: 1, orange: 3, garlic: 4,
                  banana: 2, avocado: 3 };

    const answer = { kale: 14, apple: 6, orange: 11, garlic: 134,
                  banana: 10, avocado: 7 };

    assert.deepEqual(addList(og, add), answer);
    assert.deepEqual(og, answer);
  });

  it.skip('should add both objects together, bad data should be 0', function() {
    const og = { kale: null, apple: 5, orange: null, garlic: 130,
                  banana: 8, avocado: 44 };
    const add = { kale: null, apple: null, orange: 3, garlic: 4,
                  banana: 2, avocado: 3 };

    const answer = { kale: 0, apple: 5, orange: 3, garlic: 134,
                  banana: 10, avocado: 47 };

    assert.deepEqual(addList(og, add), answer);
    assert.deepEqual(og, answer);
  });
});
