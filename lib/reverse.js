const reverse = (string) => {
  return string.split('').reverse().join('')
}

const forEachReverse = (string) => {
  let array = [];
  string.split('').forEach((letter) => array.unshift(letter));
  return array.join('');
}

const mapReverse = (string) => {
  let array = string.split('');
  return string.split('').map((letter, i) => {
    return array.pop()
  }).join('');
}

const reduceReverse = (string) => {
  return string.split('').reduce((array, letter) => {
    array.unshift(letter);
    return array;
  }, []).join('');
}

const forReverse = (string) => {
  let array = [];
  for(let i = 0; i < string.length; i++){
    array.unshift(string[i]);
  }
  return array.join('');
}

const forLoopReverse = (word) => {
  let array = [];

  for(let i = 0; i < word.length/2; i++) {
    array[word.length - 1 - i] = word[i];
    array[i] = word[word.length - 1 - i];
  }
  return array.join('');
  //
  // let string = ''
  // for(let i = word.length - 1; i >= 0; i--) {
  //   string += word[i];
  // }
  // return string
}

const whileReverse = (word) => {
  let string = '';
  let i = word.length - 1;
  while (i >= 0 ) {
    string += word[i]
    i--
  }
  return string;
}

module.exports = { reverse, forEachReverse, mapReverse,
                   reduceReverse, forReverse, forLoopReverse, whileReverse };
