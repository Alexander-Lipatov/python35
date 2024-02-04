// Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
//      1. Функция вывода времени на экран.
//      2. Функция изменения времени на переданное количество
// секунд.
//      3. Функция изменения времени на переданное количество
// минут.
//      4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

function createNowTime() {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

function printTime(timeObj) {
  console.log(
    `Текущее время ${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`
  );
}

function validateTime(timeObj) {
  if (timeObj.seconds >= 60) {
    timeObj.minutes += Math.floor(timeObj.seconds / 60);
    timeObj.seconds = timeObj.seconds % 60;
  }
  if (timeObj.minutes >= 60) {
    timeObj.hours += Math.floor(timeObj.minutes / 60);
    timeObj.minutes %= 60;
  }
  if (timeObj.hours >= 24) {
    timeObj.hours %= 24;
  }
  return { ...timeObj };
}
function addSeconds(timeObj, seconds = 30) {
  timeObj.seconds += seconds;
  validateTime(timeObj);
  return { ...timeObj };
}

function addMinutes(timeObj, minutes = 30) {
  timeObj.minutes += minutes;
  validateTime(timeObj);
  return { ...timeObj };
}

function addHourse(timeObj, hours = 30) {
  timeObj.hours += hours;
  validateTime(timeObj);
  return { ...timeObj };
}
