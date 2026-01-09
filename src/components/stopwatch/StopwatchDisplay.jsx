import React, { memo } from "react";
import { formatStopwatch } from "../../utils";

/**
 * Stopwatch time display
 * @param {number} milliseconds - Current elapsed time in milliseconds
 */
const StopwatchDisplay = memo(({ milliseconds }) => {
  const formatted = formatStopwatch(milliseconds);

  return (
    <div
      className="
      text-7xl 
      font-bold 
      text-primary 
      mb-12 
      font-mono 
      text-center
    "
    >
      {formatted}
    </div>
  );
});

StopwatchDisplay.displayName = "StopwatchDisplay";

export default StopwatchDisplay;
