import React, { memo } from "react";
import { Card } from "../ui";
import { StopwatchDisplay, StopwatchControls, LapsList } from "./";
import { useStopwatch } from "../../hooks";

/**
 * Main stopwatch panel component
 * Manages stopwatch state and lap recording
 */
const StopwatchPanel = memo(() => {
  const { milliseconds, isRunning, laps, toggle, reset, addLap } =
    useStopwatch();

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Stopwatch</h2>
      <StopwatchDisplay milliseconds={milliseconds} />
      <StopwatchControls
        isRunning={isRunning}
        onToggle={toggle}
        onLap={addLap}
        onReset={reset}
      />
      <LapsList laps={laps} />
    </Card>
  );
});

StopwatchPanel.displayName = "StopwatchPanel";

export default StopwatchPanel;
