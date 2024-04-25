"use client";
import {
  Button,
  ButtonGroup,
  Card,
  Typography,
} from "@/shared/component/materialUi";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartType,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import randomColor from "randomcolor";

ChartJS.register(ArcElement, Tooltip, Legend);

type props = {
  label: string;
  valuesLabel: string[] | [];
  datasets: number[] | [];
};

export const Analytics = ({ label, valuesLabel, datasets }: props) => {
  const data = {
    labels: valuesLabel,
    datasets: [
      {
        label: label,
        data: datasets,
        backgroundColor: datasets?.map((item) =>
          randomColor({ luminosity: "light" }).toString()
        ),
        borderWidth: 0,
      },
    ],
  };

  const options = { plugins: { legend: { display: false } } };
  return (
    <Card className="pt-4 px-4 h-[300px] flex flex-col overflow-hidden gap-2">
      <div className="flex justify-between items-center">
        <Typography variant="lead" className="font-semibold text-gray-800">
          {label}
        </Typography>
      </div>

      <div className="h-[80%] w-full flex justify-center">
        {datasets?.length === 0 ? (
          <Typography variant="small" className="text-center">
            No data.
          </Typography>
        ) : (
          <Doughnut data={data} options={options} />
        )}
      </div>
    </Card>
  );
};
