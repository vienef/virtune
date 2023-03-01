import { useEffect } from 'react';
import { endSong, switchSong } from '../../utilities/audio';
import { generateNumber } from '../../utilities/math';

export default function useNextSong(callback, list, song, queue, timer) {
  useEffect(() => {
    function handleSong() {
      const audio = document.querySelector('AUDIO');
      if (song) {
        const target = queue === 'repeat'
          ? song
          : queue === 'shuffle'
            ? list[generateNumber(list.length)]
            : switchSong(list, song);
        endSong(audio, () => callback(target), timer);
      }
    };
    handleSong();
  }, [callback, list, song, queue, timer]);
}
