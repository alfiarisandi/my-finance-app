"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-gray-200 w-full h-full min-h-dvh bg-black py-4 text-white">
      <div className="hidden flex-col justify-center p-14 lg:flex">
        <div className="w-full h-full rounded-xl overflow-hidden p-40 relative shadow-xl drop-shadow-md shadow-gray-600">
          <Image
            fill
            src="/assets/img/img_cash_flow.jpg"
            alt="Cash flow"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-8 flex flex-col justify-between items-center border border-gray-500 rounded-xl">
          <Typography variant="h2" className="font-semibold pb-8">
            My Finance
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
}
