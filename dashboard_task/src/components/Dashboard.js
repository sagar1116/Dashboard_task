import React, { useState, useEffect } from 'react';
import BubbleChart from './BubbleChart';
import DataGrid from './DataGrid';

// Initial data for testing
const initialData = [
  { id: 1, name: 'Item 1', x: 10, y: 20, size: 30 },
  { id: 2, name: 'Item 2', x: 15, y: 25, size: 40 },
  { id: 3, name: 'Item 3', x: 20, y: 30, size: 50 },
  { id: 4, name: 'Item 4', x: 25, y: 35, size: 60 },
  { id: 5, name: 'Item 5', x: 30, y: 40, size: 70 },
];

const Dashboard = () => {
  // Store filtered data
  const [filteredData, setFilteredData] = useState(initialData);

  // Example filter logic: filter data based on some criteria
  const handleFilter = (criteria) => {
    setFilteredData(initialData.filter(item => item.size >= criteria));
  };

  // When a bubble is clicked, filter data to show only that item
  const handleBubbleClick = (selectedData) => {
    setFilteredData([selectedData]); // Update filtered data to show only the selected bubble
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Filter button */}
      <div className="mb-4">
        <button onClick={() => handleFilter(50)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Filter Size greater than 50
        </button>
      </div>

      {/* Bubble chart */}
      <div className="mb-6">
        <BubbleChart data={filteredData} onBubbleClick={handleBubbleClick} />
      </div>

      {/* Data grid */}
      <div>
        <DataGrid data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
