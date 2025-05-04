import React from "react";

const FilterBar = ({ onFilterChange }) => {
  const moods = ["All", "Happy", "Excited", "Sad"];

  return (
    <div className="flex gap-3 mb-4">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onFilterChange(mood)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

