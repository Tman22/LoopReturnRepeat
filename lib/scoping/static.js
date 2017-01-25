
class Sum {
  constructor() {
  }

  static addTen(array) {
    return this.sum(array) + 10
  }

  static sum(array) {
    return array.reduce((sum,i) => sum + i, 0);
  }

}
var sum1 = new Sum();

module.exports = { Sum }
