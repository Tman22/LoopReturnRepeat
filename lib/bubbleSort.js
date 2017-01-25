function bubbleSort(array) {
  var length = array.length, i, j, done;

  for(j = 0; j < length; j++) {
    done = true
            for(i = 0; i < length-j-1; i++) {
              if(array[i] > array[i+1]) {
                let bigNum = array[i]
                array[i] = array[i+1]
                array[i+1] = bigNum
                done = false
              }
              console.log(i)
            }
    if(done) return array;
  }
  // return array
}


module.exports = bubbleSort;
