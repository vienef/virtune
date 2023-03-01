import { switchSong } from './audio';
import { generateNumber, toHours } from './math';

export function changeDuration(e, audio, callback) {
  const value = e.target.value;
  const input = document.querySelector('.duration-input');
  const time = value / 100 * Math.floor(audio.duration);

  input.onmouseup = () => {
    audio.currentTime = time;
    callback();
  }
  changeDurationText(time);
  changeDurationTrack(value);
}

export function changeDurationText(value = 0) {
  const currentTime = document.querySelector('#current-time');
  const { minutes, seconds } = toHours(value);
  const fixedSeconds = Math.floor(seconds);
  const firstDigit = fixedSeconds < 10 ? 0 : '';
  currentTime.textContent = `${minutes}:${firstDigit}${fixedSeconds}`;
}

export function changeDurationTrack(value = 0) {
  const slider = document.querySelector('.duration-slider');
  const input = slider.querySelector('.duration-input');
  const track = slider.querySelector('.slider-track');
  input.value = value;
  track.style.width = `${value}%`;
}

export function generateTarget(id, song, queue, list) {
  const normalTarget = id === 'next'
    ? switchSong(list, song)
    : switchSong(list, song, false);
  const randomTarget = list[generateNumber(list.length)];
  return queue === 'shuffle' ? randomTarget : normalTarget;
}

export function moveDuration(id, audio, callback) {  
  const timePlusTen = audio.currentTime + 10;
  const timeMinusTen = audio.currentTime - 10;
  const timeChange = id === 'forward' ? timePlusTen : timeMinusTen;

  const isNext = timeChange > audio.duration && true;
  const isReset = timeChange < 0 && true;

  isNext
    ? callback()
    : isReset
      ? audio.currentTime = 0
      : audio.currentTime = timeChange;
}
