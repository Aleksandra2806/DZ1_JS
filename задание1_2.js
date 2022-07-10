//задание2

function saturdaySunday() {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const dayOff = document.getElementById('dayOff');
  for (let i = 0; i < days.length; i++) {
    let newdiv = document.createElement('div');
    if (i > 4) {
      newdiv.classList.add('dayOff');
      newdiv.textContent = days[i]; 
    } else {
    newdiv.textContent = days[i]; 
    }
    document.body.appendChild(newdiv); 
  }
}

