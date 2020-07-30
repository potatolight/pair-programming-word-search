const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = verticalArray(letters).map(vs => vs.join(''));
    let isMatch = false
    for (l of horizontalJoin) {
      if (l.includes(word) ) {
        isMatch = true;
        return true;
      } 
    }
    if(!isMatch){
      for ( let v of verticalJoin ) {
        if (v.includes(word)){
          return true
        }
      }
    }
    return false
  }
  const verticalArray = function(array) {
  let arr = []
  let len = array.length
  let vlen = array[0].length
  for(let i = 0; i < vlen; i++){
    arr[i] = []
    for(let j = 0; j < len ; j++) {
      arr[i][j] = array[j][i]
    }
  }
  return arr;
  };
  
  module.exports = wordSearch