import React, { memo } from "react";

/**
 * Toggle Switch component
 * @param {boolean} checked - Switch state
 * @param {function} onChange - Change handler
 */
const Switch = memo(({ checked, onChange }) => (
  <label className="relative inline-block w-14 h-7 cursor-pointer group">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only peer"
    />
    <div
      className="
      w-14 h-7 
      bg-slate-700
      peer-focus:outline-none 
      peer-focus:ring-4
      peer-focus:ring-primary/30
      rounded-full 
      peer 
      peer-checked:after:translate-x-7 
      after:content-[''] 
      after:absolute 
      after:top-0.5 
      after:left-[4px] 
      after:bg-white 
      after:rounded-full 
      after:h-6 
      after:w-6 
      after:transition-all 
      after:duration-300
      after:shadow-lg
      peer-checked:bg-gradient-to-r
      peer-checked:from-primary-500
      peer-checked:to-secondary-500
      peer-checked:shadow-lg
      peer-checked:shadow-primary/40
      transition-all
      duration-300
      group-hover:scale-105
    "
    ></div>
  </label>
));

Switch.displayName = "Switch";

export default Switch;
