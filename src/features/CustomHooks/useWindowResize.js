import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useWindowResize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const handleResize = useDebouncedCallback(() => (
    setSize([window.innerWidth, window.innerHeight])
  ));

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const [width, height] = size;
  const orientation = width < height
    ? 'portrait'
    : Math.round(width / height) === 1
      ? 'square'
      : height <= 600
        ? 'mobile'
        : 'landscape';
  
  return {
    portrait: orientation === 'portrait' && true,
    square: orientation === 'square' && true,
    mobile: orientation === 'mobile' && true,
    landscape: orientation === 'landscape' && true
  };
}
