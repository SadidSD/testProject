import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Asia', value: 50 },
  { name: 'America', value: 30 },
  { name: 'Europe', value: 20 },
];

const COLORS = ['#4caf50', '#ff9800', '#2196f3'];

const DoughnutChart = () => {

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label={({ name, value }) => {
          const percentage = ((value / total) * 100).toFixed(1); 
          return `${percentage}%`; 
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
  
      <text
        x="50%" 
        y="50%" 
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '16px', fontWeight: 'bold', fill: '#333' }}
      >
        134,982
      </text>
    </PieChart>
  );
};

export default DoughnutChart;
