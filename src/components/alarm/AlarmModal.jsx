import React, { memo, useState } from "react";
import { X } from "lucide-react";
import { Button, Input } from "../ui";

/**
 * Modal for creating new alarms
 * @param {boolean} isOpen - Modal open state
 * @param {function} onClose - Close handler
 * @param {function} onAdd - Add alarm handler
 */
const AlarmModal = memo(({ isOpen, onClose, onAdd }) => {
  const [hours, setHours] = useState("07");
  const [minutes, setMinutes] = useState("00");
  const [period, setPeriod] = useState("AM");
  const [label, setLabel] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = `${hours}:${minutes} ${period}`;
    onAdd(time, label || "Alarm");
    setHours("07");
    setMinutes("00");
    setPeriod("AM");
    setLabel("");
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl shadow-primary/20 animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Add New Alarm
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Time
            </label>
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                min="1"
                max="12"
                value={hours}
                onChange={(e) => setHours(e.target.value.padStart(2, "0"))}
                className="w-20 text-center text-xl font-mono"
                required
              />
              <span className="text-2xl font-bold text-slate-500">:</span>
              <Input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value.padStart(2, "0"))}
                className="w-20 text-center text-xl font-mono"
                required
              />
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white font-medium focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Label (optional)
            </label>
            <Input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g., Morning Workout"
              className="w-full"
            />
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              Add Alarm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
});

AlarmModal.displayName = "AlarmModal";

export default AlarmModal;
