import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'January', Asia: 30, America: 50 },
  { month: 'February', Asia: 20, America: 60 },
  { month: 'March', Asia: 50, America: 40 },
  { month: 'April', Asia: 40, America: 70 },
  { month: 'May', Asia: 60, America: 80 },
  { month: 'June', Asia: 80, America: 90 },
];

const LineChartComponent = () => {
  const [chartDimensions, setChartDimensions] = useState({ width: 900, height: 400 });

  const handleResize = () => {
    console.log("Window width:", window.innerWidth);  // Debugging the window width
    if (window.innerWidth <= 1200) {
      setChartDimensions({ width: 300, height: 200 });
      console.log("hoche vai")
    } else {
      setChartDimensions({ width: 900, height: 400 });
    }
  };

  useEffect(() => {
    // Initial call to set the right chart dimensions based on the initial window width
    handleResize();
    
    // Add event listener to listen for resize events
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LineChart width={chartDimensions.width} height={chartDimensions.height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Asia" stroke="#4caf50" />
      <Line type="monotone" dataKey="America" stroke="#ff9800" />
    </LineChart>
  );
};

export default LineChartComponent;
