import React, { memo, useState, useCallback } from "react";
import { Input } from "../ui";

/**
 * Timer input fields for hours, minutes, and seconds
 * @param {function} onStart - Start timer handler
 * @param {boolean} disabled - Disabled state
 */
const TimerInputs = memo(({ onStart, disabled }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const handleHoursChange = useCallback((e) => {
    const value = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
    setHours(value);
  }, []);

  const handleMinutesChange = useCallback((e) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setMinutes(value);
  }, []);

  const handleSecondsChange = useCallback((e) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setSeconds(value);
  }, []);

  const handleStart = useCallback(() => {
    onStart(hours, minutes, seconds);
  }, [hours, minutes, seconds, onStart]);

  // Auto-start when user finishes input
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !disabled) {
        handleStart();
      }
    },
    [disabled, handleStart]
  );

  return (
    <div className="flex gap-4 justify-center mb-12">
      <div className="text-center">
        <Input
          type="number"
          min="0"
          max="23"
          value={hours}
          onChange={handleHoursChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="w-24 text-3xl font-bold text-center"
        />
        <div className="text-xs text-slate-400 mt-2">Hours</div>
      </div>
      <span className="text-4xl font-bold self-center">:</span>
      <div className="text-center">
        <Input
          type="number"
          min="0"
          max="59"
          value={minutes}
          onChange={handleMinutesChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="w-24 text-3xl font-bold text-center"
        />
        <div className="text-xs text-slate-400 mt-2">Minutes</div>
      </div>
      <span className="text-4xl font-bold self-center">:</span>
      <div className="text-center">
        <Input
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleSecondsChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="w-24 text-3xl font-bold text-center"
        />
        <div className="text-xs text-slate-400 mt-2">Seconds</div>
      </div>
    </div>
  );
});

TimerInputs.displayName = "TimerInputs";

export default TimerInputs;
