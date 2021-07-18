//Таймер
const countTimer = (year, month, day) => {
  const timerHour = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  if (day <= new Date().getDate()) day = new Date().getDate() + 1;
  const getTimeRemaining = () => {
    let dateStop = new Date(year, month, day).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (num) => (num < 10 ? '0' + num : num);

  const updateClock = () => {
    let timer = getTimeRemaining();
    timerHour.textContent = addZero(timer.hours);
    timerMinutes.textContent = addZero(timer.minutes);
    timerSeconds.textContent = addZero(timer.seconds);

    if (timer.timeRemaining <= 0) {
      // timerHour.textContent = '00'
      // timerMinutes.textContent = '00'
      // timerSeconds.textContent = '00'
      // clearInterval(startTimer)
      day = new Date().getDate() + 1;
    }
  };
  setInterval(updateClock, 1000);
};

export default countTimer;
