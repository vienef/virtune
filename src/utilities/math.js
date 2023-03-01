export function findMedian(data) {
  const index = Math.floor(data.length / 2);
  return [...data].sort((a, b) => a - b)[index];
};

export function generateNumber(number) {
  return Math.floor(Math.random() * number);
};

export function roundTo(number, multiplier = 1) {
  return Math.ceil(number / multiplier) * multiplier;
}

export function toHours(time) {
  const hourInSeconds = 3600;
  const minuteInSeconds = 60;

  const hours = Math.floor(time / hourInSeconds);
  const remainingSeconds = time - hours * hourInSeconds;
  const minutes = Math.floor(remainingSeconds / minuteInSeconds);
  const seconds = remainingSeconds - minutes * minuteInSeconds;

  return { hours, minutes, seconds };
}

export function toSeconds(time) {
  const colon = ':';
  const number = time.replaceAll(colon, '');
  const timeFormat = Number(time.slice(0, time.indexOf(colon))) < 10
    ? `0${number}`
    : number;
  const digits = timeFormat.length;

  const secondsDigit = digits - 2;
  const minutesDigit = digits - 4;

  const seconds = Number(timeFormat.slice(secondsDigit));
  const minutes = Number(timeFormat.slice(minutesDigit, secondsDigit)) * 60;
  const hours = digits > 4
    ? Number(timeFormat.slice(digits - 6), minutesDigit) * 3600
    : 0;
  
  return seconds + minutes + hours;
}
