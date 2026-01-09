import React, { memo } from "react";

/**
 * Reusable Card component for content sections
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 */
const Card = memo(({ children, className = "" }) => (
  <div
    className={`
    bg-slate-900 
    border border-slate-800 
    rounded-2xl 
    p-8 
    hover:border-primary/50 
    transition-all 
    duration-300 
    ${className}
  `}
  >
    {children}
  </div>
));

Card.displayName = "Card";

export default Card;
