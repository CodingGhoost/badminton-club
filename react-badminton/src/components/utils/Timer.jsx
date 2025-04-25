import React, { useRef, useEffect, useState } from "react";

function useCountdown(durationSecs) {
  const [remaining, setRemaining] = useState(durationSecs);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(prev => prev > 0 ? prev - 1 : durationSecs);
    }, 1000);

    return () => clearInterval(interval);
  }, [durationSecs]);

  return remaining;
}
export default function CountdownTimer() {
  const secs = useCountdown(780); // 13mins
  const mins = Math.floor(secs / 60);
  const seconds = secs % 60;

  return (
    <div style={{fontSize:'30px'}}>
      {mins} <span style={{fontSize:'14px', fontWeight:'normal'}}>min</span> {String(seconds).padStart(2, '0')} <span style={{fontSize:'14px', fontWeight:'normal'}}>sec</span>
    </div>
  );
}