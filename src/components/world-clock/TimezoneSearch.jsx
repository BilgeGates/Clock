import React, { memo, useState, useCallback } from "react";
import { Search, Globe } from "lucide-react";
import { Input } from "../ui";

/**
 * Search box for finding and adding timezones
 * @param {function} searchTimezones - Function to search timezones
 * @param {function} onAdd - Add timezone handler
 */
const TimezoneSearch = memo(({ searchTimezones, onAdd }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);

      if (value.length >= 2) {
        const searchResults = searchTimezones(value);
        setResults(searchResults);
        setShowResults(searchResults.length > 0);
      } else {
        setResults([]);
        setShowResults(false);
      }
    },
    [searchTimezones]
  );

  const handleAdd = useCallback(
    (timezone) => {
      onAdd(timezone);
      setQuery("");
      setResults([]);
      setShowResults(false);
    },
    [onAdd]
  );

  return (
    <div className="mb-4">
      <div className="relative">
        <Search
          className="
          absolute 
          left-3 
          top-1/2 
          -translate-y-1/2 
          w-5 h-5 
          text-slate-400
        "
        />
        <Input
          value={query}
          onChange={handleSearch}
          placeholder="Search city or country..."
          className="w-full pl-10"
        />
      </div>

      {showResults && (
        <div
          className="
          mt-2 
          max-h-64 
          overflow-y-auto 
          bg-slate-800 
          border 
          border-slate-700 
          rounded-lg
        "
        >
          {results.map((tz, i) => (
            <div
              key={i}
              onClick={() => handleAdd(tz)}
              className="
                p-3 
                hover:bg-slate-700 
                cursor-pointer 
                transition-colors 
                flex 
                items-center 
                gap-3 
                border-b 
                border-slate-700 
                last:border-b-0
              "
            >
              <Globe className="w-4 h-4 text-primary" />
              <div>
                <div className="text-slate-100 font-medium">{tz.city}</div>
                <div className="text-xs text-slate-400">{tz.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

TimezoneSearch.displayName = "TimezoneSearch";

export default TimezoneSearch;
