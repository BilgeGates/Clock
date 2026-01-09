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
      "rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
      primary:
        "bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/30",
      secondary: "bg-slate-700 hover:bg-slate-600 text-white",
      danger: "bg-red-600 hover:bg-red-500 text-white",
      ghost:
        "bg-slate-800 border border-slate-700 text-slate-300 hover:bg-primary hover:border-primary hover:text-white",
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
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
        ${className}
      `}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
