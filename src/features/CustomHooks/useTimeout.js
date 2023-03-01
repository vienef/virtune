import { useEffect } from 'react';

export default function useTimeout(callback, timeout) {
  useEffect(() => {
    const timer = setTimeout(callback, timeout);
    return () => clearTimeout(timer);
  }, [callback, timeout]);
}
