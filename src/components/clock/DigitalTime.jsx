import React, { memo, useMemo } from "react";

/**
 * Digital time and date display
 * @param {Date} time - Current time to display
 */
const DigitalTime = memo(({ time }) => {
  const formatted = useMemo(
    () => ({
      time: time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
      date: time.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }),
    [time],
  );

  return (
    <div className="text-center w-full">
      <div
        className="
        text-4xl sm:text-5xl md:text-6xl
        font-bold 
        bg-gradient-to-r 
        from-primary-400
        via-secondary-400
        to-accent-400
        bg-clip-text 
        text-transparent 
        mb-3
        font-mono
        tracking-wider
        drop-shadow-lg
        animate-fade-in
      "
      >
        {formatted.time}
      </div>
      <div className="text-base sm:text-lg text-slate-400 font-medium">
        {formatted.date}
      </div>
    </div>
  );
});

DigitalTime.displayName = "DigitalTime";

export default DigitalTime;
