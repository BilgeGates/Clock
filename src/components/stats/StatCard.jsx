import React, { memo } from "react";

/**
 * Individual stat card component
 * @param {string} label - Stat label
 * @param {string|number} value - Stat value
 * @param {React.Component} Icon - Lucide icon component
 */
const StatCard = memo(({ label, value, Icon }) => (
  <div
    className="
    relative
    bg-gradient-to-br 
    from-slate-900/60
    via-slate-800/40
    to-slate-900/60
    backdrop-blur-sm
    p-4 sm:p-6
    rounded-xl 
    border border-slate-700/50
    hover:border-primary/40
    hover:shadow-lg
    hover:shadow-primary/10
    transition-all 
    duration-500
    overflow-hidden
    group
  "
  >
    {/* Animated gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs sm:text-sm text-slate-400 font-medium">
          {label}
        </div>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
          </div>
        )}
      </div>
      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        {value}
      </div>
    </div>
  </div>
));

StatCard.displayName = "StatCard";

export default StatCard;
