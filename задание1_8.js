//задание8

function unionMass() {
  const array1 = [5, 2, 1, -10, 8];
  const array2 = [5, 2, 1, -9, 3, 7]; 
  const union = function(array1, array2) {
    const obj = {},
          array3 = [];
    const arr = array1.concat(array2);
          out = [];
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      obj[str] = true; 
    }
    for (i in obj) {
      array3.push(i);
    }
    return array3;
  }
  document.body.insertAdjacentHTML('beforeend', union(array1, array2))
}
