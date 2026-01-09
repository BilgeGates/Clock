import React, { memo, useMemo } from "react";
import { Globe, X } from "lucide-react";
import { useTime } from "../../hooks";

/**
 * Individual timezone card showing city, country, and current time
 * @param {string} city - City name
 * @param {string} country - Country name
 * @param {string} tz - IANA timezone identifier
 * @param {function} onRemove - Remove handler
 */
const TimezoneCard = memo(({ city, country, tz, onRemove }) => {
  const time = useTime();

  const formatted = useMemo(() => {
    const tzTime = new Date(time.toLocaleString("en-US", { timeZone: tz }));
    return {
      time: tzTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      date: tzTime.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
  }, [time, tz]);

  return (
    <div
      className="
      flex 
      justify-between 
      items-center 
      p-4 
      bg-gradient-to-r 
      from-primary/10 
      to-accent/10 
      rounded-xl 
      border 
      border-slate-800 
      hover:border-primary/50 
      transition-all 
      duration-300 
      group
    "
    >
      <div className="flex items-center gap-3">
        <Globe className="w-5 h-5 text-primary" />
        <div>
          <div className="font-semibold text-slate-100">{city}</div>
          <div className="text-xs text-slate-400">{country}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-2xl font-bold text-primary font-mono">
            {formatted.time}
          </div>
          <div className="text-xs text-slate-400">{formatted.date}</div>
        </div>
        <button
          onClick={onRemove}
          className="
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            text-red-500 
            hover:text-red-400
          "
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
});

TimezoneCard.displayName = "TimezoneCard";

export default TimezoneCard;
