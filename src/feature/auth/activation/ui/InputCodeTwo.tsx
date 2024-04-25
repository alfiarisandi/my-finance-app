import { Input } from "@material-tailwind/react";
import React from "react";

export default function InputCodeTwo({
  onChange,
  value,
}: {
  onChange: any;
  value: string;
}) {
  return (
    <input
      type="number"
      placeholder="XXX-XXX"
      onChange={onChange}
      value={value}
      className="h-12 w-full text-center text-xl bg-black text-white border border-white rounded-lg shadow-lg ring-4 ring-transparent focus:ring-white/20"
    />
  );
}
