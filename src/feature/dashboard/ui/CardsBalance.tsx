import { useMoneyFormatter } from "@/shared/utils/helper";
import { Card, IconButton, Typography } from "@/shared/component/materialUi";
import React from "react";
import { LuChevronLeft, LuImage } from "react-icons/lu";
import Image from "next/image";

type props = {
  label: string;
  value: number;
  cardNumber: number;
  exp?: string;
  img?: string;
  isLoading?: boolean;
  handlerToogle: ({ type }: { type: "prev" | "next" }) => void;
};

export default function CardsBalance({
  label,
  value,
  cardNumber,
  exp,
  img,
  isLoading,
  handlerToogle,
}: props) {
  const money = useMoneyFormatter({ value });
  return (
    <Card className="pt-4 px-4 h-[140px] flex flex-col justify-between overflow-hidden gap-2">
      <div className="flex gap-4 items-center justify-between">
        <IconButton
          onClick={() => handlerToogle({ type: "prev" })}
          variant="filled"
          className="bg-gray-300 rounded-full p-1"
        >
          <LuChevronLeft className=" h-5 w-5 text-gray-600" />
        </IconButton>
        {isLoading ? (
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
              className="h-5 w-full rounded-md bg-gray-300"
            >
              &nbsp;
            </Typography>
          </div>
        ) : (
          <div>
            <Typography variant="small" className="font-medium text-center">
              {label}
            </Typography>

            <Typography
              variant="paragraph"
              className="font-bold text-gray-800 text-center"
            >
              {money}
            </Typography>
          </div>
        )}
        <IconButton
          onClick={() => handlerToogle({ type: "next" })}
          variant="filled"
          className="bg-gray-300 rounded-full p-1"
        >
          <LuChevronLeft className="rotate-180 h-5 w-5 text-gray-600" />
        </IconButton>
      </div>
      <div className="px-3 relative w-full">
        <div className="w-[90%] h-[8px] mx-auto bg-gray-300 rounded-t-xl"></div>
        <div className="w-full bg-gradient-to-b from-blue-gray-500 to-gray-800 h-full p-3 rounded-t-lg border border-white flex justify-between">
          {isLoading ? (
            <div className="flex flex-col justify-between animate-pulse">
              <Typography
                as="div"
                variant="h1"
                className="h-4 w-32 rounded-md bg-gray-500"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="h-2 w-20 rounded-md bg-gray-500"
              >
                &nbsp;
              </Typography>
            </div>
          ) : (
            <div className="flex flex-col justify-between">
              <Typography
                variant="small"
                className="font-semibold text-gray-100"
              >
                {`${cardNumber}`.replace(/(\d{4})/g, "$1 ")}
              </Typography>
              <Typography
                variant="small"
                className="text-xs font-light text-white"
              >
                Exp {exp}
              </Typography>
            </div>
          )}
          {img &&
            (isLoading ? (
              <div className="p-2 bg-white rounded-md flex justify-center h-fit animate-pulse">
                <LuImage />
              </div>
            ) : (
              <div className="rounded-md flex justify-center h-[35px] w-[65px] relative">
                <Image alt="Logo" src={img} fill className="object-contain" />
              </div>
            ))}
        </div>
      </div>
    </Card>
  );
}
