import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'January', Asia: 30, America: 50 },
  { month: 'February', Asia: 20, America: 60 },
  { month: 'March', Asia: 50, America: 40 },
  { month: 'April', Asia: 40, America: 70 },
  { month: 'May', Asia: 60, America: 80 },
  { month: 'June', Asia: 80, America: 90 },
];

const LineChartComponent = () => (
  <LineChart width={900} height={400} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Asia" stroke="#4caf50" />
    <Line type="monotone" dataKey="America" stroke="#ff9800" />
  </LineChart>
);

export default LineChartComponent;
