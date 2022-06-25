//задание6
function dateWeek() {
  const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const day = document.getElementById('today'); 
  const todayDay = new Date();
  const days = () => {
    week.forEach((item, i) => {
      let newdiv = document.createElement('div'); 
      if (i === +todayDay.getDay()-1) { 
        newdiv.classList.add('today'); 
        newdiv.textContent = week[i]; 
      } else {
        newdiv.textContent = week[i];
      }
      day.appendChild(newdiv);
    });
  }
  days();
}