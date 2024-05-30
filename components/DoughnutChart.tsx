"use clint'"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts}: ) => {
  return <Doughnut data={[]} />
  )
}

export default DoughnutChart