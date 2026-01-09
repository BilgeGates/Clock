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
    [time]
  );

  return (
    <div className="text-center">
      <div
        className="
        text-5xl 
        font-bold 
        bg-gradient-to-r 
        from-primary 
        to-accent 
        bg-clip-text 
        text-transparent 
        mb-2 
        font-mono
      "
      >
        {formatted.time}
      </div>
      <div className="text-lg text-slate-400">{formatted.date}</div>
    </div>
  );
});

DigitalTime.displayName = "DigitalTime";

export default DigitalTime;
