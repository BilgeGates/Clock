import React, { memo, useMemo } from "react";
import ClockMarkers from "./ClockMarkers";

/**
 * Analog clock face with hour, minute, and second hands
 * @param {Date} time - Current time to display
 */
const AnalogClock = memo(({ time }) => {
  const angles = useMemo(() => {
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();

    return {
      hour: (h % 12) * 30 + m * 0.5,
      minute: m * 6,
      second: s * 6,
    };
  }, [time]);

  return (
    <div
      className="
      relative 
      w-72 h-72 
      rounded-full 
      bg-gradient-to-br 
      from-slate-800 
      to-slate-950 
      border-2 
      border-slate-700 
      shadow-2xl
    "
    >
      <ClockMarkers />

      {/* Hour hand */}
      <div
        className="
          absolute 
          bottom-1/2 
          left-1/2 
          w-2 h-20 
          bg-gradient-to-t 
          from-primary 
          to-secondary 
          rounded-full 
          origin-bottom 
          -ml-1 
          transition-transform 
          duration-1000
        "
        style={{ transform: `rotate(${angles.hour}deg)` }}
      />

      {/* Minute hand */}
      <div
        className="
          absolute 
          bottom-1/2 
          left-1/2 
          w-1.5 h-28 
          bg-gradient-to-t 
          from-secondary 
          to-accent 
          rounded-full 
          origin-bottom 
          -ml-0.5 
          transition-transform 
          duration-1000
        "
        style={{ transform: `rotate(${angles.minute}deg)` }}
      />

      {/* Second hand */}
      <div
        className="
          absolute 
          bottom-1/2 
          left-1/2 
          w-0.5 h-32 
          bg-accent 
          rounded-full 
          origin-bottom 
          transition-transform
        "
        style={{ transform: `rotate(${angles.second}deg)` }}
      />

      {/* Center dot */}
      <div
        className="
        absolute 
        top-1/2 
        left-1/2 
        w-3 h-3 
        bg-primary 
        rounded-full 
        -mt-1.5 
        -ml-1.5 
        shadow-lg 
        shadow-primary/50
      "
      />
    </div>
  );
});

AnalogClock.displayName = "AnalogClock";

export default AnalogClock;
