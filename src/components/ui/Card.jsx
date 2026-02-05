import React, { memo } from "react";

/**
 * Reusable Card component for content sections
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 */
const Card = memo(({ children, className = "" }) => (
  <div
    className={`
    relative
    bg-gradient-to-br 
    from-slate-900/90
    via-slate-900/80
    to-slate-800/90
    backdrop-blur-md
    border border-slate-700/50
    rounded-2xl 
    p-6 sm:p-8 
    hover:border-primary/40
    hover:shadow-xl
    hover:shadow-primary/10
    transition-all 
    duration-500
    animate-fade-in
    group
    ${className}
  `}
  >
    {/* Glass effect overlay */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

    {/* Animated border gradient on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-xl" />

    {/* Content */}
    <div className="relative z-10">{children}</div>
  </div>
));

Card.displayName = "Card";

export default Card;
