import React, { memo } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "../ui";

/**
 * Timer control buttons
 * @param {boolean} isRunning - Timer running state
 * @param {boolean} hasStarted - Whether timer has been started
 * @param {function} onToggle - Toggle start/pause
 * @param {function} onReset - Reset timer
 */
const TimerControls = memo(({ isRunning, hasStarted, onToggle, onReset }) => (
  <div className="flex gap-4 justify-center">
    {hasStarted && (
      <Button size="lg" onClick={onToggle}>
        {isRunning ? (
          <>
            <Pause className="w-5 h-5" /> Pause
          </>
        ) : (
          <>
            <Play className="w-5 h-5" /> Resume
          </>
        )}
      </Button>
    )}
    <Button size="lg" variant="danger" onClick={onReset}>
      <RotateCcw className="w-5 h-5" /> Reset
    </Button>
  </div>
));

TimerControls.displayName = "TimerControls";

export default TimerControls;
