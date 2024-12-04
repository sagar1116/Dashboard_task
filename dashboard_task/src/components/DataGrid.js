import React, { useMemo } from 'react';

const DataGrid = ({ data }) => {
  const sortedData = useMemo(() => {
    return data.sort((a, b) => a.size - b.size); // Sort by size
  }, [data]);

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">X</th>
          <th className="px-4 py-2 text-left">Y</th>
          <th className="px-4 py-2 text-left">Size</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <tr key={item.id} className="border-b">
            <td className="px-4 py-2 text-left">{item.id}</td>
            <td className="px-4 py-2 text-left">{item.name}</td>
            <td className="px-4 py-2 text-left">{item.x}</td>
            <td className="px-4 py-2 text-left">{item.y}</td>
            <td className="px-4 py-2 text-left">{item.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
