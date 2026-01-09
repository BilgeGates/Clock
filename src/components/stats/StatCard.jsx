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
    bg-gradient-to-br 
    from-primary/10 
    to-accent/10 
    p-6 
    rounded-xl 
    border border-slate-800 
    hover:border-primary/50 
    transition-all 
    duration-300
  "
  >
    <div className="flex items-center justify-between mb-2">
      <div className="text-sm text-slate-400">{label}</div>
      {Icon && <Icon className="w-4 h-4 text-primary" />}
    </div>
    <div className="text-3xl font-bold text-primary">{value}</div>
  </div>
));

StatCard.displayName = "StatCard";

export default StatCard;
