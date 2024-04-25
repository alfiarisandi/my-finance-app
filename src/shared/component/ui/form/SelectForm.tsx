"use client";
import { Option, Select, Spinner } from "@material-tailwind/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { LuInfo } from "react-icons/lu";

type props = {
  label: string;
  name: string;
  placeholder?: string;
  color?: "red" | "gray";
  className?: string;
  isLoadOption: boolean;
  optionsValues:
    | {
        label: string;
        value: string;
      }[]
    | [];
};

export default function SelectForm({
  label,
  name = "",
  placeholder = "",
  color = "gray",
  className,
  isLoadOption,
  optionsValues,
}: props) {
  const { control, formState } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-1">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            label={label}
            color={formState.errors[name] ? "red" : color}
            onChange={(e) => onChange(e)}
            arrow={isLoadOption ? <Spinner className="h-3 w-3" /> : undefined}
            defaultValue={value}
            className={className}
          >
            {optionsValues?.length === 0 ? (
              <Option value="" disabled>
                Data empty.
              </Option>
            ) : (
              optionsValues?.map((item, i) => (
                <Option value={item.value} key={i}>
                  {item.label}
                </Option>
              ))
            )}
          </Select>
        )}
      />
      {formState.errors[name] && (
        <div className="flex gap-1 items-center">
          <LuInfo className="w-2 h-2 text-red-700" />
          <span className="text-xs text-red-700">
            {formState.errors[name] &&
              formState.errors[name]?.message?.toString()}
          </span>
        </div>
      )}
    </div>
  );
}
