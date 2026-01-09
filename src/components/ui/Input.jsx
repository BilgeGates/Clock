import React, { memo } from "react";

/**
 * Reusable Input component
 * @param {string} type - Input type
 * @param {any} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {string} className - Additional CSS classes
 */
const Input = memo(
  ({
    type = "text",
    value,
    onChange,
    placeholder,
    className = "",
    ...props
  }) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
      px-4 py-3 
      bg-slate-800 
      border border-slate-700 
      rounded-lg 
      text-slate-100 
      placeholder-slate-500 
      focus:outline-none 
      focus:border-primary 
      transition-all 
      duration-300 
      ${className}
    `}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;
