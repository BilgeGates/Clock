import { useState, useEffect } from "react";

/**
 * Custom hook for getting current time with auto-update
 * Updates every second
 */
export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
