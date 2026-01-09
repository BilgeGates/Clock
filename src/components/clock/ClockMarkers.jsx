import React, { memo, useMemo } from "react";

/**
 * Clock face markers (60 markers for minutes/seconds)
 * Renders 12 hour markers (larger) and 48 minute markers (smaller)
 */
const ClockMarkers = memo(() => {
  const markers = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  return (
    <div className="absolute inset-0">
      {markers.map((i) => (
        <div
          key={i}
          className={
            i % 5 === 0
              ? "absolute top-2 left-1/2 w-1 h-6 bg-slate-500 rounded-full origin-bottom transform-gpu"
              : "absolute top-3 left-1/2 w-0.5 h-3 bg-slate-700 rounded-full origin-bottom transform-gpu"
          }
          style={{
            transform: `translateX(-50%) rotate(${i * 6}deg)`,
            transformOrigin: "50% 136px",
          }}
        />
      ))}
    </div>
  );
});

ClockMarkers.displayName = "ClockMarkers";

export default ClockMarkers;
