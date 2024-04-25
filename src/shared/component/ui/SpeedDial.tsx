import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { LuArrowDown, LuPlus } from "react-icons/lu";

export default function SpeedDialComponent() {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };
  return (
    <SpeedDial>
      <SpeedDialHandler>
        <IconButton size="lg" className="rounded-full">
          <LuPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
        </IconButton>
      </SpeedDialHandler>
      <SpeedDialContent>
        <SpeedDialAction className="h-10 w-10">
          <LuArrowDown className="h-5 w-5 rotate-45 text-green-700" />
          <Typography
            color="blue-gray"
            className="text-sm absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal text-nowrap pr-2"
          >
            Insert Income
          </Typography>
        </SpeedDialAction>
      </SpeedDialContent>
    </SpeedDial>
  );
}
