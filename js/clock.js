function minTwo(n) {
    return (n < 10 ? '0' : '') + n;
}

function time() {
  var day = new Date();
  var year = day.getFullYear();
  var month = day.getMonth() + 1;
  var date = day.getDate();
  var hour = day.getHours();
  var minute = day.getMinutes();
  var second = day.getSeconds();

  if (month === 1 && date === 1) {
    year--;
    month = 12;
    date = 32;

    if (!clock.classList.contains('red')) {
      clock.classList.add('red');
    }
  }

  clock.textContent = `${year}-${minTwo(month)}-${minTwo(date)} ${minTwo(hour)}:${minTwo(minute)}:${minTwo(second)}`;
}

var clock = document.getElementById('clock');
setInterval(time, 1000);
