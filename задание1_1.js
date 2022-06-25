//задание1

const obj = {
  'Минск': 'Беларусь',
  'Москва': 'Россия',
  'Киев':'Украина',
}
function countryCity() {
  for (key in obj) {
    document.body.insertAdjacentHTML('beforeend', key + " - это " + obj[key] + '<br>'); 
  }
}




