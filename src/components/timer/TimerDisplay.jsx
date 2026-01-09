import React, { memo } from "react";
import { formatTimer } from "../../utils";

/**
 * Timer countdown display
 * @param {number} seconds - Remaining seconds
 */
const TimerDisplay = memo(({ seconds }) => {
  const formatted = formatTimer(seconds);

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

TimerDisplay.displayName = "TimerDisplay";

export default TimerDisplay;
