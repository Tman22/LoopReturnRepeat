const sort = (array) => {
  return array.sort((a, b) => a - b);
}

const forEachSort = (array) => {
  return array.map((num, i) => {
    if (num > array[i + 1]){
      let t = array[i + 1];
      array[i + 1] = num;
      return t;
    }
    return num;
  });
}

module.exports = { sort, forEachSort };
