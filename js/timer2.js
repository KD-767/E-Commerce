document.addEventListener('DOMContentLoaded', function() {
    // конечная дата
    const deadline = new Date(2023, 10, 10);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['Day', 'Days', 'Days']);
      $hours.dataset.title = declensionNum(hours, ['Hour', 'Hours', 'Hours']);
      $minutes.dataset.title = declensionNum(minutes, ['Minute', 'Minutes', 'Minutes']);
      $seconds.dataset.title = declensionNum(seconds, ['Second', 'Seconds', 'Seconds']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer2__days');
    const $hours = document.querySelector('.timer2__hours');
    const $minutes = document.querySelector('.timer2__minutes');
    const $seconds = document.querySelector('.timer2__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
