import { useState, useCallback } from "react";

/**
 * Custom hook for managing alarms
 * Handles alarm creation, toggling, and deletion
 */
export const useAlarms = () => {
  const [alarms, setAlarms] = useState([
    { id: 1, time: "07:00 AM", label: "Weekdays", enabled: true },
    { id: 2, time: "09:00 AM", label: "Daily", enabled: false },
  ]);

  const toggleAlarm = useCallback((id) => {
    setAlarms((prev) =>
      prev.map((alarm) =>
        alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
      )
    );
  }, []);

  const addAlarm = useCallback((time, label) => {
    setAlarms((prev) => [
      ...prev,
      {
        id: Date.now(),
        time,
        label,
        enabled: true,
      },
    ]);
  }, []);

  const removeAlarm = useCallback((id) => {
    setAlarms((prev) => prev.filter((alarm) => alarm.id !== id));
  }, []);

  return {
    alarms,
    toggleAlarm,
    addAlarm,
    removeAlarm,
  };
};
