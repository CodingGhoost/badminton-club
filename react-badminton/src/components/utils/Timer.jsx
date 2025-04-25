import React, { useRef, useEffect, useState } from "react";

const useCountdown = (durationSecs) => {
  const [target, setTarget] = useState(Date.now() + durationSecs * 1000);
  const [timeLeft, setTimeLeft] = useState(durationSecs);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const diffSecs = Math.ceil((target - Date.now()) / 1000);
      if (diffSecs <= 0) {
        setTarget(Date.now() + durationSecs * 1000);
        setTimeLeft(durationSecs);
      } else {
        setTimeLeft(diffSecs);
      }
    }, 1000);
  }, [target, durationSecs])

  return timeLeft;
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