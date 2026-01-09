import React, { memo, useMemo } from "react";
import StatCard from "./StatCard";
import { getDayOfYear, getWeekNumber, getUnixTimestamp } from "../../utils";

/**
 * Grid of statistics cards
 * @param {Date} time - Current time
 */
const StatsGrid = memo(({ time }) => {
  const stats = useMemo(() => {
    const dayOfYear = getDayOfYear(time);
    const weekNum = getWeekNumber(time);
    const unix = getUnixTimestamp(time);
    const localTime = time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return [
      { label: "Local Time", value: localTime },
      { label: "Day of Year", value: dayOfYear },
      { label: "Week Number", value: weekNum },
      { label: "Unix Time", value: unix },
    ];
  }, [time]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
});

StatsGrid.displayName = "StatsGrid";

export default StatsGrid;
