import React, { memo } from "react";
import { Card } from "../ui";
import TimerDisplay from "./TimerDisplay";
import TimerInputs from "./TimerInputs";
import TimerControls from "./TimerControls";
import { useTimer } from "../../hooks";

/**
 * Main timer panel component
 * Manages countdown timer state
 */
const TimerPanel = memo(() => {
  const { seconds, isRunning, start, toggle, reset } = useTimer();
  const hasStarted = seconds > 0;

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Countdown Timer</h2>

      {!hasStarted && <TimerInputs onStart={start} disabled={isRunning} />}

      <TimerDisplay seconds={seconds || 300} />

      <TimerControls
        isRunning={isRunning}
        hasStarted={hasStarted}
        onToggle={toggle}
        onReset={reset}
      />
    </Card>
  );
});

TimerPanel.displayName = "TimerPanel";

export default TimerPanel;
