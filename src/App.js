import React, { useState, useMemo, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Header } from "./components/layout";
import { StatsGrid } from "./components/stats";
import { AnalogClock, DigitalTime } from "./components/clock";
import { WorldClockPanel } from "./components/world-clock";
import { StopwatchPanel } from "./components/stopwatch";
import { TimerPanel } from "./components/timer";
import { AlarmPanel } from "./components/alarm";
import { useTime } from "./hooks";
import { requestNotificationPermission } from "./utils";
import { Card } from "./components/ui";

/**
 * Main App component
 * Manages tab navigation and renders active tab content
 */
function App() {
  const [activeTab, setActiveTab] = useState("clock");
  const time = useTime();

  // Request notification permission on mount
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  // Render content based on active tab
  const renderContent = useMemo(() => {
    switch (activeTab) {
      case "clock":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex flex-col items-center gap-8">
                <AnalogClock time={time} />
                <DigitalTime time={time} />
              </div>
            </Card>
            <WorldClockPanel />
          </div>
        );
      case "stopwatch":
        return <StopwatchPanel />;
      case "timer":
        return <TimerPanel />;
      case "alarm":
        return <AlarmPanel />;
      default:
        return null;
    }
  }, [activeTab, time]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 py-6 max-w-7xl">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <StatsGrid time={time} />
        {renderContent}
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
