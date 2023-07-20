import React, { createContext, useContext, useEffect, useState } from 'react';
import type { TimerContextProps } from '../types/context/timer';

const TimerContext = createContext({} as TimerContextProps);

export function TimerProvider({ children }: { children: React.ReactNode }) {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [countdownIsActive, setCountdownIsActive] = useState(false);

    let countdownTimeout: number;
    const countdownIsFinished = minutes == 0 && seconds == 0;

    useEffect(() => {
        countdownTimeout = setTimeout(() => {
            if (countdownIsActive && !countdownIsFinished) {
                setSeconds(seconds - 1);
                if (seconds == 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if (countdownIsFinished) {
                stopCountdown();
            }
        }, 1000);
    }, [minutes, seconds, countdownIsActive]);

    function startCountdown() {
        setCountdownIsActive(true);
    }

    function stopCountdown() {
        if (countdownIsActive) {
            clearTimeout(countdownTimeout);
            setCountdownIsActive(false);
            setMinutes(0);
            setSeconds(0);
        }
    }

    function addMinutes() {
        if (minutes <= 54) {
            setMinutes(minutes + 5);
        }
    }

    function removeMinutes() {
        if (minutes >= 6) {
            setMinutes(minutes - 5);
        }
    }

    return (
        <TimerContext.Provider value={{
            minutes,
            seconds,
            startCountdown,
            stopCountdown,
            addMinutes,
            removeMinutes
        }}>
            { children }
        </ TimerContext.Provider>
    );
}

export function useTimer() {
    const ctx = useContext(TimerContext);
    const hasContext = ctx ?? undefined;

    if (!hasContext) {
        throw new Error('Context not found');
    }
    return ctx
}
