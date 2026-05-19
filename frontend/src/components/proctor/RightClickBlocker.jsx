import { useEffect } from 'react';

export default function RightClickBlocker() {
  useEffect(() => {
    const block = (event) => event.preventDefault();
    document.addEventListener('contextmenu', block);
    return () => document.removeEventListener('contextmenu', block);
  }, []);

  return null;
}
