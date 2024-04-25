import { Card, Typography } from "@/shared/component/materialUi";
import { useMoneyFormatter } from "@/shared/utils/helper";
import React from "react";
import { LuArrowDownWideNarrow, LuArrowUpWideNarrow } from "react-icons/lu";

type props = {
  label: string;
  value: number;
  status: boolean;
  percentage: number;
  isLoading?: boolean;
};

export const Cards = ({
  label,
  value,
  status,
  percentage,
  isLoading,
}: props) => {
  const money = useMoneyFormatter({ value });
  return (
    <Card className="p-4 h-[140px] flex flex-col justify-between relative overflow-hidden">
      {isLoading ? (
        <>
          <div className="animate-pulse">
            <Typography
              as="div"
              variant="h1"
              className="mb-1 h-3 w-32 rounded-md bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="h-7 w-full rounded-md bg-gray-300"
            >
              &nbsp;
            </Typography>
          </div>
          <div className="animate-pulse">
            <Typography
              as="div"
              variant="h1"
              className="mb-1 h-3 w-32 rounded-md bg-gray-300"
            >
              &nbsp;
            </Typography>
          </div>
        </>
      ) : (
        <>
          <div>
            <Typography variant="small" className="font-medium">
              {label}
            </Typography>
            <Typography variant="lead" className={`font-bold text-gray-800`}>
              {money}
            </Typography>
          </div>
          <Typography
            variant="small"
            className="flex flex-row items-center mt-auto"
          >
            {status ? (
              <>
                <LuArrowUpWideNarrow className="text-green-700" />{" "}
                <b className="text-base font-semibold">+</b>
              </>
            ) : (
              <>
                {" "}
                <LuArrowDownWideNarrow className="text-red-700" />{" "}
                <b className="text-base font-semibold"></b>
              </>
            )}
            <b className="text-base font-semibold">{percentage}</b>
            {"  "} from last weeks
          </Typography>
        </>
      )}
    </Card>
  );
};
