import React, { memo } from "react";
import { Switch } from "../ui";

/**
 * Individual alarm card
 * @param {string} time - Alarm time (e.g., "07:00 AM")
 * @param {string} label - Alarm label (e.g., "Weekdays")
 * @param {boolean} enabled - Alarm enabled state
 * @param {function} onToggle - Toggle alarm handler
 */
const AlarmCard = memo(({ time, label, enabled, onToggle }) => (
  <div
    className="
    flex 
    justify-between 
    items-center 
    p-6 
    bg-slate-800 
    rounded-xl 
    border 
    border-slate-700 
    hover:border-primary/50 
    transition-all 
    duration-300
  "
  >
    <div>
      <div
        className={`
        text-3xl 
        font-bold 
        mb-1 
        ${enabled ? "text-primary" : "text-slate-500"}
      `}
      >
        {time}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
    <Switch checked={enabled} onChange={onToggle} />
  </div>
));

AlarmCard.displayName = "AlarmCard";

export default AlarmCard;
