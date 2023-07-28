// src/components/StockChart.js
import React from "react";
import { Line ,Chart} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,TimeScale } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const StockChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data).reverse(),
    datasets: [
      {
        label: 'Stock Price',
        data: Object.values(data).map((item) => parseFloat(item)),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };
  return (
    <div className="container">
      <h2>Stock Price Chart</h2>
      <Chart type='line' data={chartData} />
    </div>
  );
};

export default StockChart;

