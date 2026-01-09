import React, { memo } from "react";
import { Play, Pause, Flag, RotateCcw } from "lucide-react";
import { Button } from "../ui";

/**
 * Stopwatch control buttons
 * @param {boolean} isRunning - Stopwatch running state
 * @param {function} onToggle - Toggle start/pause
 * @param {function} onLap - Record lap time
 * @param {function} onReset - Reset stopwatch
 */
const StopwatchControls = memo(({ isRunning, onToggle, onLap, onReset }) => (
  <div className="flex gap-4 justify-center mb-8">
    <Button size="lg" onClick={onToggle}>
      {isRunning ? (
        <>
          <Pause className="w-5 h-5" /> Pause
        </>
      ) : (
        <>
          <Play className="w-5 h-5" /> Start
        </>
      )}
    </Button>
    <Button size="lg" variant="secondary" onClick={onLap} disabled={!isRunning}>
      <Flag className="w-5 h-5" /> Lap
    </Button>
    <Button size="lg" variant="danger" onClick={onReset}>
      <RotateCcw className="w-5 h-5" /> Reset
    </Button>
  </div>
));

StopwatchControls.displayName = "StopwatchControls";

export default StopwatchControls;
