import { useEffect, useState } from 'react';

export function useTimer(seconds = 600) {
  const [remaining, setRemaining] = useState(seconds);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active || remaining <= 0) return undefined;
    const interval = window.setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [active, remaining]);

  const reset = (value = seconds) => {
    setRemaining(value);
    setActive(false);
  };

  return { remaining, active, setActive, reset };
}
