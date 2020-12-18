var clock = new Vue({
  el: '#clock',
  data: {
      time: '',
      date: ''
  }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  var day = new Date();
  var dayOfWeek = day.getDay();
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
  }

  clock.time = zeroPadding(hour, 2) + ':' + zeroPadding(minute, 2) + ':' + zeroPadding(second, 2);
  clock.date = zeroPadding(year, 4) + '-' + zeroPadding(month, 2) + '-' + zeroPadding(date, 2) + ' ' + week[dayOfWeek];
};

function zeroPadding(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
      zero += '0';
  }
  return (zero + num).slice(-digit);
}

document.body.addEventListener('click', () => {
  window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
});
