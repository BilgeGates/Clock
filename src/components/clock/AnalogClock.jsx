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
    <div className="relative group">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl animate-pulse" />

      {/* Main clock face */}
      <div
        className="
        relative 
        w-72 h-72 sm:w-80 sm:h-80
        rounded-full 
        bg-gradient-to-br 
        from-slate-800/90
        via-slate-900/90
        to-slate-950/90
        backdrop-blur-sm
        border-4 
        border-slate-700/50
        shadow-2xl
        shadow-primary/20
        hover:shadow-primary/40
        hover:border-primary/30
        transition-all 
        duration-500
        animate-fade-in
      "
      >
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/5 to-accent/5" />

        <ClockMarkers />

        {/* Hour hand */}
        <div
          className="
            absolute 
            bottom-1/2 
            left-1/2 
            w-2.5 h-20 sm:h-24
            bg-gradient-to-t 
            from-primary-500
            via-primary-400
            to-secondary-400
            rounded-full 
            origin-bottom 
            -ml-1.25
            transition-transform 
            duration-1000
            shadow-lg
            shadow-primary/50
            ease-out
          "
          style={{
            transform: `rotate(${angles.hour}deg)`,
            filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))",
          }}
        />

        {/* Minute hand */}
        <div
          className="
            absolute 
            bottom-1/2 
            left-1/2 
            w-2 h-28 sm:h-32
            bg-gradient-to-t 
            from-secondary-500
            via-secondary-400
            to-accent-400
            rounded-full 
            origin-bottom 
            -ml-1
            transition-transform 
            duration-1000
            shadow-lg
            shadow-secondary/50
            ease-out
          "
          style={{
            transform: `rotate(${angles.minute}deg)`,
            filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.6))",
          }}
        />

        {/* Second hand */}
        <div
          className="
            absolute 
            bottom-1/2 
            left-1/2 
            w-1 h-32 sm:h-36
            bg-gradient-to-t
            from-accent-500
            to-accent-300
            rounded-full 
            origin-bottom 
            -ml-0.5
            transition-transform
            duration-200
            shadow-lg
            shadow-accent/60
            ease-linear
          "
          style={{
            transform: `rotate(${angles.second}deg)`,
            filter: "drop-shadow(0 0 4px rgba(236, 72, 153, 0.8))",
          }}
        />

        {/* Center dot with pulsing effect */}
        <div
          className="
          absolute 
          top-1/2 
          left-1/2 
          w-4 h-4 
          bg-gradient-to-br
          from-primary-400
          to-accent-400
          rounded-full 
          -mt-2
          -ml-2
          shadow-lg 
          shadow-primary/70
          animate-pulse
          border-2
          border-white/20
        "
        />

        {/* Additional center highlight */}
        <div
          className="
          absolute 
          top-1/2 
          left-1/2 
          w-2 h-2 
          bg-white
          rounded-full 
          -mt-1
          -ml-1
          opacity-80
        "
        />
      </div>
    </div>
  );
});

AnalogClock.displayName = "AnalogClock";

export default AnalogClock;
