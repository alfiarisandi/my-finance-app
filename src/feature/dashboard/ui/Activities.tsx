"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import {
  Button,
  ButtonGroup,
  Card,
  Typography,
} from "@/shared/component/materialUi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type props = {
  label: string;
  chartsLabel: string[];
  datasets: any[] | [];
};

export const Activities = ({ label, chartsLabel, datasets }: props) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ["January", "February"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [200, 100],
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Dataset 2",
        data: [200, 300],
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        label: "Dataset 3",
        data: [400, 200],
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
    ],
  };

  return (
    <Card className="pt-4 px-4 h-[350px] flex flex-col overflow-hidden gap-2">
      <div className="flex justify-between items-center">
        <Typography variant="lead" className="font-semibold text-gray-800">
          {label}
        </Typography>
        {/* <ButtonGroup variant="outlined" color="blue-gray">
          <Button
            className={`"px-3 py-2 text-xs font-semibold capitalize outline-none text-gray-800 ${
              activeTab === 1 && "bg-gray-300"
            }`}
          >
            Day
          </Button>
          <Button
            className={`"px-3 py-2 text-xs font-semibold capitalize outline-none text-gray-800 ${
              activeTab === 2 && "bg-gray-300"
            }`}
          >
            Week
          </Button>
          <Button
            className={`"px-3 py-2 text-xs font-semibold capitalize outline-none text-gray-800 ${
              activeTab === 3 && "bg-gray-300"
            }`}
          >
            Month
          </Button>
        </ButtonGroup> */}
      </div>
      <div className="!h-[280px] w-full">
        <Bar options={options} data={data} className="" />
      </div>
    </Card>
  );
};
