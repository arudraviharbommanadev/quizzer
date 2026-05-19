import { useEffect } from 'react';

export default function TabSwitchDetector({ onViolation }) {
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        onViolation?.('You left the exam tab. Stay focused until submission.');
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [onViolation]);

  return null;
}
