import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for stopwatch functionality
 * Provides millisecond precision timing with lap recording
 */
export const useStopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (!isRunning) return;

    const startTime = Date.now() - milliseconds;
    const interval = setInterval(() => {
      setMilliseconds(Date.now() - startTime);
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning, milliseconds]);

  const toggle = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const reset = useCallback(() => {
    setMilliseconds(0);
    setIsRunning(false);
    setLaps([]);
  }, []);

  const addLap = useCallback(() => {
    if (isRunning) {
      setLaps((prev) => [milliseconds, ...prev]);
    }
  }, [milliseconds, isRunning]);

  return {
    milliseconds,
    isRunning,
    laps,
    toggle,
    reset,
    addLap,
  };
};
