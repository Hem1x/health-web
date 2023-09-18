import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Количетво шагов за 2023 год',
    },
  },
};

const labels = [
  'Январь',
  'Ферваль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Шагов',
      data: [
        450, 620, 720, 550, 800, 690, 920, 450, 620, 720, 550, 800,
        690, 920,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
