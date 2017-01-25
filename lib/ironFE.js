function findStuff(num, array) {
  return array.find(function(item) {
    return item === num;
  })
}

function filterStuff(num, array) {
  return array.filter(function(item) {
    return item === num;
  })
}

function sortStuff(array) {
  return array.sort(function(a, b) {
    return a - b;
  })
}

function indexStuff(num, array) {
  return array.indexOf(num);
}

function reverseString(string) {
  // let array = []
  // string.split('').forEach((l) =>
  //   array.unshift(l)
  // )
  return string.split('').reduce((a, l) => {
    a.unshift(l);
    return a;
  },[]).join('');
  // return array.join('')
}

module.exports = {findStuff, sortStuff, filterStuff,
                  indexStuff, reverseString
                  };
