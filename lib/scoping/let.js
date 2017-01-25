// For this exercise you can only use "let"

class letFun {
  constructor() {

  }

  first(bool, num) {
    let x = 1;
    if (bool) {
       let y = x + num; // This line can be modified but must stay here
    }
  }

  second(bool) {
    if (bool) {
      let newArray = []
      newArray.push(10)
    }
    return newArray
  }

  third(array) {
    for(let i = 0; i < array.length; i++){
      if(array[i] === 3) {
        let i = i + array.length
      }
    }
    return i;
  }
}

let letFun1 = new letFun();

module.exports = { letFun1 }
