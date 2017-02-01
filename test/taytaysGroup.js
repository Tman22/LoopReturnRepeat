var { assert } = require('chai');
var { totalBunch } = require('../lib/group1.js');

describe('Tay tay is about to show you some stuff', function() {

it.skip('should find the total of each category' , function() {
    let list = { kale: {dino: 1, baby: 5 }, apple: { honeycrisp: 1, fuji: 5 },
    lettuce: { romaine: 2, iceburg: 2  } };

    let answer = { kale: 6, apple: 6, lettuce: 4 }
    assert.deepEqual(totalBunch(list), answer);
    assert.deepEqual(list, answer);
  });

  it.skip('should find the total of each category' , function() {
    let list = { kale: {dino: 1, baby: 5 }, apple: { honeycrisp: 1, fuji: 5 },
    lettuce: { romaine: 2, iceburg: 2  }, avocado: 3 };

    let answer = { kale: 6, apple: 6, lettuce: 4, avocado: 3 }

    assert.deepEqual(totalBunch(list), answer);
    assert.deepEqual(list, answer);
  });
});
