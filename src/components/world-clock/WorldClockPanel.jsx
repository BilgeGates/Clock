import React, { memo, useState, useCallback } from "react";
import { Plus } from "lucide-react";
import { Card, Button } from "../ui";
import TimezoneSearch from "./TimezoneSearch";
import TimezoneList from "./TimezoneList";
import { useTimezones } from "../../hooks";

/**
 * Main world clock panel component
 * Manages timezone selection and display
 */
const WorldClockPanel = memo(() => {
  const { selectedTimezones, addTimezone, removeTimezone, searchTimezones } =
    useTimezones();
  const [showSearch, setShowSearch] = useState(false);

  const handleAdd = useCallback(
    (timezone) => {
      addTimezone(timezone);
      setShowSearch(false);
    },
    [addTimezone]
  );

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">World Clocks</h2>
        <Button size="sm" onClick={() => setShowSearch(!showSearch)}>
          <Plus className="w-4 h-4" /> Add City
        </Button>
      </div>

      {showSearch && (
        <TimezoneSearch searchTimezones={searchTimezones} onAdd={handleAdd} />
      )}

      <TimezoneList timezones={selectedTimezones} onRemove={removeTimezone} />
    </Card>
  );
});

WorldClockPanel.displayName = "WorldClockPanel";

export default WorldClockPanel;
