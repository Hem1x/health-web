import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// labels (Категории)
// label (При наведении)
// data (Числовые данные)

interface DiogramProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor?: string[];
      borderWidth?: number;
    }[];
  };
  showLegend?: boolean;
}

const Diogram: React.FC<DiogramProps> = ({
  data,
  showLegend = true,
}) => {
  if (showLegend) {
    ChartJS.register(ArcElement, Tooltip, Legend);
  } else {
    ChartJS.register(ArcElement, Tooltip);
  }

  return (
    <div className="w-[300px]">
      <Pie data={data} />;
    </div>
  );
};

export default Diogram;
