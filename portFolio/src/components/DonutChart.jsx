
import React from 'react';
import { PieChart, Pie, Label } from 'recharts';
const DonutChart = () => {
  const data = [
    { name: 'c', val: 200, fill: 'rgb(105,100,255)' },
    { name: 'd', val: 200, fill: 'rgb(105,100,255)' },
    { name: 'e', val: 200, fill: 'rgb(224,220,255)' },
    { name: 'f', val: 200, fill: 'rgb(224,220,255)' },
    { name: 'g', val: 200, fill: 'rgb(224,220,255)' },
    { name: 'h', val: 200, fill: 'rgb(224,220,255)' },
    { name: 'i', val: 200, fill: 'rgb(224,220,255)' },
    { name: 'j', val: 200, fill: 'rgb(224,220,255)' },
    { name: 'j', val: 200, fill: 'rgb(105,100,255)' },
    { name: 'j', val: 200, fill: 'rgb(105,100,255)' },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="val" outerRadius={100} innerRadius={65}   fill={(entry) => entry.data.fill} />
      <text x={150} y={150} textAnchor="middle" fontSize="20" fontWeight="bold" fill="blue">
        350
      </text>
      <text x={150} y={170} textAnchor="middle" fontSize="14" fill="black">
        Sphere Hiring
      </text>
    </PieChart>
  );
};

export default DonutChart;
