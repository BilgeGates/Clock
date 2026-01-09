import React, { memo } from "react";
import TimezoneCard from "./TimezoneCard";

/**
 * List of timezone cards
 * @param {Array} timezones - Array of timezone objects
 * @param {function} onRemove - Remove timezone handler
 */
const TimezoneList = memo(({ timezones, onRemove }) => (
  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
    {timezones.map((tz, i) => (
      <TimezoneCard key={i} {...tz} onRemove={() => onRemove(i)} />
    ))}
  </div>
));

TimezoneList.displayName = "TimezoneList";

export default TimezoneList;
