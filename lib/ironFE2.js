const displayThis = (obj, array) => {
  return array.map((item, i) => {
    return `${obj[item]} and ${item}`;
  });
}

const addNewItem = (pizza, newObj) => {
  return Object.assign(pizza, newObj);
}

const addItems = (obj, key, value) => {
  // obj[key] += value;
  // return obj;
  return Object.assign(obj, { [key]: obj[key] + value })
}

const foodCounter = (foodNames, amount) => {
  return foodNames.reduce((obj, name, i) => {
    return Object.assign(obj, {[name]: amount[i]})
    // obj[name] = amount[i]
    // return obj
  }, {});
}

const createNewList = (obj, newList) => {
  return Object.keys(newList).reduce((newObj, key) => {
    // newObj[key] = obj[key] + newList[key];
    // return newObj;
    return Object.assign(newObj, { [key]: obj[key] + newList[key] })
  }, {});
}

const addList = (obj, newList) => {
  Object.keys(newList).forEach((key) => {
    // obj[key] += newList[key];
    Object.assign(obj, { [key]: obj[key] + newList[key] })
  });
  return obj;
}

const totalBunch = (obj) => {
  Object.keys(obj).forEach((item) => {
    if(typeof(obj[item]) !== 'object') return;
    obj[item] = Object.keys(obj[item]).reduce((sum, key) =>  sum += obj[item][key], 0)
  });
  return obj
}



// print objects name and number
// create array of objects
// displaying ones that only have fruit in it

// Object.keys(obj).map(e => {
//   obj[e]
// })

// number of fruit in object

// (const a = [1, 3, 5, 7]
// const b = [23, 45, 56, 67]

// const newObj = {}
//
// a.forEach((e, i) => newObj[e] = b[i])
//
// console.log(newObj);)

//
// for(var i = 0; i < array.length - 1; i++){
//   let last = array.length - 1
//   let first = i
//   array[first] = array[last]
//   array[last] = array[first]
// }
module.exports = { foodCounter, addItems, addList, createNewList, addNewItem,
                   totalBunch, displayThis };
