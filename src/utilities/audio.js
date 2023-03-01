export function endSong(audio, callback, timeout) {
  audio.onended = () => {
    audio.pause();
    const timer = setTimeout(() => callback(), timeout);
    return () => clearTimeout(timer);
  };
}

export function playSong(audio, target) {
  import(`../assets/${target}.mp3`).then(source => {
    audio.currentTime = 0;
    audio.src = source.default;
    audio.play();
  });
}

export function switchSong(list, target, forward = true) {
  const index = list.indexOf(target);
  const length = list.length - 1;
  const next = index === length ? list[0] : list[index + 1];
  const prev = index === 0 ? list[length] : list[index - 1];
  return forward ? next : prev;
}
