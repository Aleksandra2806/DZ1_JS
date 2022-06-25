//задание3 

function vegetablesClone() {
  const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  function copyArr(arr) {
    return arr.slice(0);
  }
  const cloneVegetables = copyArr(vegetables);
  document.body.insertAdjacentHTML('beforeend', cloneVegetables + '<br>');

//
  const vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  function copyArr1(arr1) {
    return [...arr1];
  }
  const cloneVegetables1 = copyArr1(vegetables1);
  document.body.insertAdjacentHTML('beforeend', cloneVegetables1 + '<br>');

//
  const vegetables2 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  function copyArr2(arr2) {
    return Array.from(arr2);
  }
  const cloneVegetables2 = copyArr2(vegetables2);
  document.body.insertAdjacentHTML('beforeend', cloneVegetables2);
}