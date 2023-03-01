import { useEffect } from 'react';
import {
  changeDurationText,
  changeDurationTrack
} from '../../utilities/helper';

export default function useAudioDuration(orientation, status, disabled) {
  useEffect(() => {
    function handleDuration() {
      const audio = document.querySelector('AUDIO');
      const currentTime = Math.floor(audio.currentTime);
      const currentDuration = Math.floor(audio.duration);
      if (status) { changeDurationText(currentTime); }
      if (orientation && status) {
        const progressValue = (currentTime / currentDuration * 100);
        changeDurationTrack(progressValue);
      }
    }
    const timer = setInterval(handleDuration, 100);
    if (!status) {
      clearInterval(timer);
      if (disabled) {
        changeDurationText();
        orientation && changeDurationTrack();
      }
    }
    return () => clearInterval(timer);
  }, [orientation, status, disabled]);
}
