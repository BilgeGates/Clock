import React, { memo } from "react";
import AlarmCard from "./AlarmCard";

/**
 * List of alarm cards
 * @param {Array} alarms - Array of alarm objects
 * @param {function} onToggle - Toggle alarm handler
 */
const AlarmList = memo(({ alarms, onToggle }) => (
  <div className="space-y-4">
    {alarms.map((alarm) => (
      <AlarmCard
        key={alarm.id}
        {...alarm}
        onToggle={() => onToggle(alarm.id)}
      />
    ))}
  </div>
));

AlarmList.displayName = "AlarmList";

export default AlarmList;
