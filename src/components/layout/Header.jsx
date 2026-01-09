import React, { memo } from "react";
import { Clock, Timer, AlarmClock } from "lucide-react";

/**
 * App header with logo and navigation tabs
 * @param {string} activeTab - Currently active tab
 * @param {function} onTabChange - Tab change handler
 */
const Header = memo(({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "clock", label: "Clock", icon: Clock },
    { id: "stopwatch", label: "Stopwatch", icon: Timer },
    { id: "timer", label: "Timer", icon: Timer },
    { id: "alarm", label: "Alarms", icon: AlarmClock },
  ];

  return (
    <header
      className="
      flex 
      flex-col 
      md:flex-row 
      justify-between 
      items-center 
      mb-8 
      pb-6 
      border-b 
      border-slate-800
    "
    >
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <div
          className="
          w-10 h-10 
          rounded-full 
          bg-gradient-to-br 
          from-primary 
          to-accent 
          flex 
          items-center 
          justify-center 
          shadow-lg 
          shadow-primary/50
        "
        >
          <Clock className="w-6 h-6 text-white" />
        </div>
        <h1
          className="
          text-2xl 
          font-bold 
          bg-gradient-to-r 
          from-primary 
          to-accent 
          bg-clip-text 
          text-transparent
        "
        >
          World Clock & Timer
        </h1>
      </div>

      <nav className="flex gap-2 flex-wrap justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-4 py-2 
                rounded-lg 
                border 
                text-sm 
                font-medium 
                transition-all 
                duration-300 
                flex 
                items-center 
                gap-2
                ${
                  activeTab === tab.id
                    ? "bg-primary border-primary text-white"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-primary hover:border-primary hover:text-white"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
