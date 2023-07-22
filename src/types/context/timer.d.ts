export type TimerContextProps = {
  minutes: number;
  seconds: number;
  startCountdown: () => void;
  stopCountdown: () => void;
  addMinutes: () => void;
  removeMinutes: () => void;
};
