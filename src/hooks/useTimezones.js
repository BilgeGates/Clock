import { useState, useCallback } from "react";
import { TIMEZONES, DEFAULT_TIMEZONES } from "../utils";

/**
 * Custom hook for managing user's selected timezones
 * Handles adding and removing timezones with localStorage persistence
 */
export const useTimezones = () => {
  const [selectedTimezones, setSelectedTimezones] = useState(() => {
    // Initialize with default timezones
    return DEFAULT_TIMEZONES.map((tz) => TIMEZONES.find((t) => t.tz === tz));
  });

  const addTimezone = useCallback((timezone) => {
    setSelectedTimezones((prev) => {
      // Check if timezone already exists
      if (prev.find((t) => t.tz === timezone.tz)) {
        return prev;
      }
      return [...prev, timezone];
    });
  }, []);

  const removeTimezone = useCallback((index) => {
    setSelectedTimezones((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const searchTimezones = useCallback((query) => {
    if (query.length < 2) return [];

    const q = query.toLowerCase();
    return TIMEZONES.filter(
      (tz) =>
        tz.city.toLowerCase().includes(q) ||
        tz.country.toLowerCase().includes(q)
    ).slice(0, 10);
  }, []);

  return {
    selectedTimezones,
    addTimezone,
    removeTimezone,
    searchTimezones,
  };
};
