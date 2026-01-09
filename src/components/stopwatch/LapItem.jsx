import React, { memo } from "react";
import { formatLapTime } from "../../utils";

/**
 * Individual lap time item
 * @param {number} lapNumber - Lap number
 * @param {number} milliseconds - Lap time in milliseconds
 */
const LapItem = memo(({ lapNumber, milliseconds }) => {
  const formatted = formatLapTime(milliseconds);

  return (
    <div
      className="
      flex 
      justify-between 
      items-center 
      p-3 
      bg-slate-800/50 
      rounded-lg
    "
    >
      <span className="text-slate-400">Lap {lapNumber}</span>
      <span className="font-mono text-lg text-primary">{formatted}</span>
    </div>
  );
});

LapItem.displayName = "LapItem";

export default LapItem;
