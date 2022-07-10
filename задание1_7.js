//задание7

function deleteDouble() {
  const arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
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
