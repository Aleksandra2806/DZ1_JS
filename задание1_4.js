//задание4

function vegetableString() {
  const vegetables = [['Капуста', 'Репа', 'Редиска'], [1, 2, 3]];
  function stringArr(arr) {
    return arr.toString();
  }
  const stringVegetables = stringArr(vegetables);
  document.body.insertAdjacentHTML('beforeend', stringVegetables + '<br>');
//
  const vegetables1 = [['Капуста', 'Репа', 'Редиска'], [1, 2, 3]];
  function stringArr1(arr1) {
    return arr1.join();
  }
  const stringVegetables1 = stringArr1(vegetables1);
  document.body.insertAdjacentHTML('beforeend', stringVegetables1 + '<br>'); 
//
  const vegetables2 = ['Капуста', 'Репа', 'Редиска'];
  for (let i = 0; i < vegetables2.length; i++) {
    vegetables2.join()
  }
  document.body.insertAdjacentHTML('beforeend', vegetables2)
}