import React, { memo } from "react";
import { Card, Button } from "../ui";
import AlarmList from "./AlarmList";
import { useAlarms } from "../../hooks";
import { Plus } from "lucide-react";

/**
 * Main alarm panel component
 * Manages alarm creation and toggling
 */
const AlarmPanel = memo(() => {
  const { alarms, toggleAlarm, addAlarm } = useAlarms();

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Alarms</h2>
        <Button size="sm">
          <Plus className="w-4 h-4" /> Add Alarm
        </Button>
      </div>

      <AlarmList alarms={alarms} onToggle={toggleAlarm} />
    </Card>
  );
});

AlarmPanel.displayName = "AlarmPanel";

export default AlarmPanel;
