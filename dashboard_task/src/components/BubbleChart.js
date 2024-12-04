import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const BubbleChart = ({ data, onBubbleClick }) => {
  const chartData = {
    datasets: [
      {
        label: 'Bubble Chart',
        data: data.map(item => ({
          x: item.x,
          y: item.y,
          r: item.size / 2,  // Size controls bubble radius
        })),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const chartOptions = {
    onClick: (e, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        onBubbleClick(data[index]); // Trigger bubble click handler
      }
    },
    responsive: true,
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
      <Bubble data={chartData} options={chartOptions} />
    </div>
  );
};

export default BubbleChart;
