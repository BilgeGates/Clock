import React, { memo } from "react";

/**
 * Reusable Button component with multiple variants and sizes
 * @param {React.ReactNode} children - Button content
 * @param {string} variant - Button style variant (primary, secondary, danger, ghost)
 * @param {string} size - Button size (sm, md, lg)
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disabled state
 * @param {string} className - Additional CSS classes
 */
const Button = memo(
  ({
    children,
    variant = "primary",
    size = "md",
    onClick,
    disabled,
    className = "",
  }) => {
    const baseStyles =
      "rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group active:scale-95";

    const variants = {
      primary:
        "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 border border-primary-400/20",
      secondary:
        "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white shadow-lg shadow-slate-700/30 hover:shadow-xl hover:shadow-slate-600/50 border border-slate-600/20",
      danger:
        "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-500/50 border border-red-500/20",
      ghost:
        "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 hover:border-primary/50 hover:text-white hover:shadow-lg hover:shadow-primary/30",
      success:
        "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-500/50 border border-green-500/20",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed active:scale-100" : "hover:-translate-y-0.5"} 
        ${className}
      `}
      >
        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
