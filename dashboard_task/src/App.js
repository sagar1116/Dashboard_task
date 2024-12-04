import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

const App = () => {
  // Sample data (you can fetch this from an API)
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch data
    const fetchData = [
      { id: 1, name: 'Item 1', x: 10, y: 20, size: 30 },
      { id: 2, name: 'Item 2', x: 15, y: 25, size: 40 },
      { id: 3, name: 'Item 3', x: 20, y: 30, size: 50 },
      { id: 4, name: 'Item 4', x: 25, y: 35, size: 60 },
      { id: 5, name: 'Item 5', x: 30, y: 40, size: 70 },
      // Add more items for testing large datasets
    ];
    setData(fetchData);
  }, []);

  return <Dashboard data={data} />;
};

export default App;
