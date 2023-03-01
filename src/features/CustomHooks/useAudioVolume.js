import { useEffect } from 'react';

export default function useAudioVolume(volume) {
  useEffect(() => {
    function handleVolume() {
      document.querySelector('AUDIO').volume = volume / 100;
    }
    handleVolume();
  }, [volume]);
}
