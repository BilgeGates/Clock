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
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-8 w-full">
                <AnalogClock time={time} />
                <DigitalTime time={time} />
              </div>
            </Card>
            <WorldClockPanel />
          </div>
        );
      case "stopwatch":
        return (
          <div className="animate-fade-in">
            <StopwatchPanel />
          </div>
        );
      case "timer":
        return (
          <div className="animate-fade-in">
            <TimerPanel />
          </div>
        );
      case "alarm":
        return (
          <div className="animate-fade-in">
            <AlarmPanel />
          </div>
        );
      default:
        return null;
    }
  }, [activeTab, time]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 max-w-7xl relative z-10">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <StatsGrid time={time} />
        {renderContent}
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
