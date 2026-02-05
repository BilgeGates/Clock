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
      border-slate-800/50
      animate-slide-down
    "
    >
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <div
          className="
          w-12 h-12
          rounded-2xl
          bg-gradient-to-br 
          from-primary-500
          via-secondary-500
          to-accent-500
          flex 
          items-center 
          justify-center 
          shadow-xl 
          shadow-primary/50
          animate-glow
          hover:scale-110
          transition-transform
          duration-300
          relative
          overflow-hidden
          group
        "
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Clock className="w-7 h-7 text-white relative z-10 group-hover:rotate-180 transition-transform duration-700" />
        </div>
        <div>
          <h1
            className="
            text-2xl sm:text-3xl
            font-bold 
            bg-gradient-to-r 
            from-primary-400
            via-secondary-400
            to-accent-400
            bg-clip-text 
            text-transparent
            animate-shimmer
            bg-[length:200%_100%]
          "
          >
            World Clock & Timer
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Professional Time Management
          </p>
        </div>
      </div>

      <nav className="flex gap-2 flex-wrap justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative
                px-4 sm:px-5 py-2.5
                rounded-xl
                border 
                text-sm 
                font-medium 
                transition-all 
                duration-300 
                flex 
                items-center 
                gap-2
                overflow-hidden
                group
                ${
                  isActive
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 border-primary-400/50 text-white shadow-lg shadow-primary/40 scale-105"
                    : "bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-slate-300 hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-secondary-500/20 hover:border-primary/30 hover:text-white hover:scale-105"
                }
              `}
            >
              {/* Active indicator line */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
              )}

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <Icon className={`w-4 h-4 ${isActive ? "animate-pulse" : ""}`} />
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
