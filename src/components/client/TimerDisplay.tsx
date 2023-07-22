'use client';

import { useTimer } from '../../context/TimerContext';

export function TimerDisplay() {
  const { minutes, seconds } = useTimer();
  const displayMinutes = minutes.toString().padStart(2, '0');
  const displaySeconds = seconds.toString().padStart(2, '0');

  return (
    <div className="timer">
      <span>{displayMinutes}</span>
      <span>:</span>
      <span>{displaySeconds}</span>
    </div>
  );
}
