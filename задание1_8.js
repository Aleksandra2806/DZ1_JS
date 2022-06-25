//задание8

function unionMass() {
  const array1 = [5, 2, 1, -10, 8];
  const array2 = [5, 2, 1, -9, 3, 7];
  let arr = array1.concat(array2);
  function removeDuplicates(arr) {
    const obj = {},
          out = [];
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      obj[str] = true; 
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
  let result = removeDuplicates(arr);
  document.body.insertAdjacentHTML('beforeend', result)
}
