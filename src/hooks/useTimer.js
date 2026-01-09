import { useState, useEffect, useCallback } from "react";
import { playBeepSound, showNotification } from "../utils";

/**
 * Custom hook for countdown timer functionality
 * Provides countdown with sound and notification on completion
 */
export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(300); // 5 minutes default
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          playBeepSound();
          showNotification(
            "Timer Finished!",
            "Your countdown timer has completed."
          );
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const start = useCallback((hours, minutes, secs) => {
    const total = hours * 3600 + minutes * 60 + secs;
    if (total > 0) {
      setTotalSeconds(total);
      setSeconds(total);
      setIsRunning(true);
    }
  }, []);

  const toggle = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const reset = useCallback(() => {
    setSeconds(0);
    setIsRunning(false);
  }, []);

  return {
    seconds,
    totalSeconds,
    isRunning,
    start,
    toggle,
    reset,
  };
};
