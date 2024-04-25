"use client";
import { Input } from "@/shared/component/materialUi";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { LuEye, LuEyeOff, LuInfo } from "react-icons/lu";

type props = {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  color?: "black" | "white" | "red";
  className?: string;
};

const EyeIcon = ({ active }: { active: boolean }) =>
  active ? (
    <LuEye className="w-3 h-3 text-gray-300 hover:cursor-pointer" />
  ) : (
    <LuEyeOff className="w-3 h-3 text-gray-300 hover:cursor-pointer" />
  );

export const InputForm = ({
  label,
  type = "text",
  name = "",
  placeholder = "",
  color = "black",
  className,
}: props) => {
  const [open, setOpen] = useState(false);

  const { register, formState } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-1">
      <Input
        crossOrigin={""}
        color={formState.errors[name] ? "red" : color}
        label={label}
        type={type === "password" ? (open ? "text" : "password") : type}
        className={`${className}`}
        icon={
          type === "password" && (
            <div onClick={() => setOpen(!open)}>
              <EyeIcon active={open} />
            </div>
          )
        }
        {...register(name)}
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
};
