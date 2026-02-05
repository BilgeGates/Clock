import React, { memo, useState } from "react";
import { Card, Button } from "../ui";
import AlarmList from "./AlarmList";
import AlarmModal from "./AlarmModal";
import { useAlarms } from "../../hooks";
import { Plus } from "lucide-react";

/**
 * Main alarm panel component
 * Manages alarm creation and toggling
 */
const AlarmPanel = memo(() => {
  const { alarms, toggleAlarm, addAlarm } = useAlarms();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAlarm = (time, label) => {
    addAlarm(time, label);
  };

  return (
    <>
      <Card className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Alarms
          </h2>
          <Button size="sm" onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4" /> Add Alarm
          </Button>
        </div>

        <AlarmList alarms={alarms} onToggle={toggleAlarm} />
      </Card>

      <AlarmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddAlarm}
      />
    </>
  );
});

AlarmPanel.displayName = "AlarmPanel";

export default AlarmPanel;
