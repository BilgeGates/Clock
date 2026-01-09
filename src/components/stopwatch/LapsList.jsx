import React, { memo } from "react";
import LapItem from "./LapItem";

/**
 * List of recorded lap times
 * @param {Array} laps - Array of lap times in milliseconds
 */
const LapsList = memo(({ laps }) => {
  if (laps.length === 0) return null;

  return (
    <div className="max-h-64 overflow-y-auto space-y-2">
      {laps.map((lap, i) => (
        <LapItem key={i} lapNumber={laps.length - i} milliseconds={lap} />
      ))}
    </div>
  );
});

LapsList.displayName = "LapsList";

export default LapsList;
