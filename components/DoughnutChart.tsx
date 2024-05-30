"use client'"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [5767, 5624, 7902],
        backgroundColor: ['#0747b6', '#C0C0C0 ', '#333333']
      }
    ],
    labels:['Bank 1', 'Bank 2', 'Bank 3']
  }

  return <Doughnut 
  data={data} 
  options={{
    cutout: '50%',
    plugins: {
      legend: {
        display: false
      }
    }
  }}
  />
}

export default DoughnutChart