import React, { memo } from "react";

/**
 * Toggle Switch component
 * @param {boolean} checked - Switch state
 * @param {function} onChange - Change handler
 */
const Switch = memo(({ checked, onChange }) => (
  <label className="relative inline-block w-14 h-7 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only peer"
    />
    <div
      className="
      w-14 h-7 
      bg-slate-600 
      peer-focus:outline-none 
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
      peer-checked:bg-primary
    "
    ></div>
  </label>
));

Switch.displayName = "Switch";

export default Switch;
