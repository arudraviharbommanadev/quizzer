import { useEffect } from 'react';

export default function FullscreenHandler({ required }) {
  useEffect(() => {
    if (!required) return undefined;
    const handle = async () => {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen().catch(() => null);
      }
    };
    handle();
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => null);
      }
    };
  }, [required]);

  return null;
}
