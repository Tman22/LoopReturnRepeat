var { assert } = require('chai');
var { foodCounter, addItems, addList, createNewList, addNewItem, displayThis,
      totalBunch } = require('../lib/ironFE2.js');

describe('IronFE', function() {

  it('should create an array of strings', function() {
    let obj = { kale: 12, apple: 5 };
    let array = ['kale', 'apple'];

    let answer = ['12 and kale','5 and apple'];

    assert.deepEqual(displayThis(obj, array), answer);
  });

  it('should add new item', function() {
    let obj = { kale: 12, apple: 5 };

    let answer = { kale: 12, apple: 5, avocado: 4  };

    assert.deepEqual(addNewItem(obj, {avocado: 4}), answer);
    assert.deepEqual(obj, answer);
  });

  it.skip('should make an array of objs', function() {
    let obj = { kale: 12, apple: 5, orange: 1 };

    let answer = [{ kale: 12 }, { apple: 5 }, { orange: 1 }];

    assert.deepEqual(makeArrayObjs(obj), answer);
    assert.deepEqual(obj, answer);
  });

  it('should add items to apple', function() {
    let obj = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };

    let answer = { kale: 12, apple: 9, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };
    assert.deepEqual(addItems(obj, 'apple', 4), answer);
  });

  it('should combine both the arrays into one object using reduce', function() {
    let amount = [12, 5, 8, 130, 8, 44]
    let foodNames = ['kale', 'apple', 'orange', 'garlic',
                      'banana', 'avocado' ]

    let answer = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 }

    assert.deepEqual(foodCounter(foodNames, amount), answer);
  });


  it('should add both objects using reduce', function() {
    let og = { kale: 12, apple: 5, orange: 8, garlic: 130,
               banana: 8, avocado: 44 };
    let add = { kale:2, apple: 1, orange: 3, garlic: 4,
                banana: 2, avocado: 3 };

    let answer = { kale: 14, apple: 6, orange: 11, garlic: 134,
                   banana: 10, avocado: 47 };

    assert.deepEqual(createNewList(og, add), answer);
    assert.notDeepEqual(og, answer);
  });

  it('should add both objects together using forEach', function() {
    let og = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 4 };
    let add = { kale:2, apple: 1, orange: 3, garlic: 4,
                  banana: 2, avocado: 3 };

    let answer = { kale: 14, apple: 6, orange: 11, garlic: 134,
                  banana: 10, avocado: 7 };

    assert.deepEqual(addList(og, add), answer);
    assert.deepEqual(og, answer);
  });

  it('should add both objects together, bad data should be 0', function() {
    let og = { kale: null, apple: 5, orange: null, garlic: 130,
                  banana: 8, avocado: 44 };
    let add = { kale: null, apple: null, orange: 3, garlic: 4,
                  banana: 2, avocado: 3 };

    let answer = { kale: 0, apple: 5, orange: 3, garlic: 134,
                  banana: 10, avocado: 47 };

    assert.deepEqual(addList(og, add), answer);
    assert.deepEqual(og, answer);
  });

  it('should find the total of each category' , function() {
    let list = { kale: {dino: 1, baby: 5 }, apple: { honeycrisp: 1, fuji: 5 },
    lettuce: { romaine: 2, iceburg: 2  } };

    let answer = { kale: 6, apple: 6, lettuce: 4 }
    assert.deepEqual(totalBunch(list), answer);
    assert.deepEqual(list, answer);
  });

  it('should find the total of each category' , function() {
    let list = { kale: {dino: 1, baby: 5 }, apple: { honeycrisp: 1, fuji: 5 },
    lettuce: { romaine: 2, iceburg: 2  }, avocado: 3 };
    let answer = { kale: 6, apple: 6, lettuce: 4, avocado: 3 }

    assert.deepEqual(totalBunch(list), answer);
    assert.deepEqual(list, answer);
  });



  //
  // it('should change apple amount to 20', function() {
  //
  //   let og = { kale: 12, apple: 5, orange: 8, garlic: 130,
  //                 banana: 8, avocado: 44 }
  //   let add = { kale: 2, apple: 1, orange: 3, garlic: 4,
  //                 banana: 2, avocado: 3 }
  //   let answer = { kale: 14, apple: 6, orange: 11, garlic: 134,
  //                 banana: 10, avocado: 47 }
  //   assert.deepEqual(addList(og, add), answer);
  // });

});
