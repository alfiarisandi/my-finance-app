import React from "react";
import { FormProvider } from "react-hook-form";
import useIncome from "./hooks/useIncome";
import { Button, Typography } from "@material-tailwind/react";
import { LuArrowDown, LuArrowDownToLine } from "react-icons/lu";
import { InputForm } from "@/shared/component/ui/form/InputForm";

export default function InsertIncomeForm({
  modalHandler,
}: {
  modalHandler: () => void;
}) {
  const { form } = useIncome();

  return (
    <FormProvider {...form}>
      <form action="" className="flex flex-col w-full pb-3">
        <Typography
          as="div"
          variant="lead"
          className="font-bold text-gray-900 flex items-center self-start pb-3 gap-3"
        >
          <LuArrowDown className="h-5 w-5 rotate-45 text-green-700" />
          Insert Income
        </Typography>
        <div className="flex flex-col gap-3 py-3">
          <InputForm label="Income Name" name="nama_pendapatan" />
          <InputForm label="Income Amount" name="nilai_pendapatan" />
        </div>
        <Button
          type="submit"
          variant="filled"
          className="flex items-center justify-center gap-3 w-full py-2 bg-green-700 border border-green-700"
        >
          <LuArrowDownToLine className="w-3 h-3 text-white" strokeWidth={3} />
          <Typography className="font-semibold capitalize" variant="small">
            Save Income
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
