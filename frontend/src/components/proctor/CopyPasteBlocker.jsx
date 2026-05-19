import { useEffect } from 'react';

export default function CopyPasteBlocker() {
  useEffect(() => {
    const block = (event) => event.preventDefault();
    document.addEventListener('copy', block);
    document.addEventListener('paste', block);
    document.addEventListener('cut', block);
    return () => {
      document.removeEventListener('copy', block);
      document.removeEventListener('paste', block);
      document.removeEventListener('cut', block);
    };
  }, []);

  return null;
}
