import { useEffect, useState } from 'react';

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handler = () => setIsFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener('fullscreenchange', handler);
    return () => window.removeEventListener('fullscreenchange', handler);
  }, []);

  const requestFullscreen = async (element) => {
    if (element?.requestFullscreen) {
      await element.requestFullscreen();
    }
  };

  const exitFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  };

  return { isFullscreen, requestFullscreen, exitFullscreen };
}
