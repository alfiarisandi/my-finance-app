"use client";
import { InputForm } from "@/shared/component/ui/form/InputForm";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import useOutcome from "./hooks/useOutcome";
import { LuArrowUp, LuArrowUpFromLine, LuInfo } from "react-icons/lu";
import SelectForm from "@/shared/component/ui/form/SelectForm";
import useGetBuget from "../hooks/useGetBuget";
import useGetSavings from "../hooks/useGetSavings";

export default function InsertOutcomeForm({
  modalHandler,
}: {
  modalHandler: () => void;
}) {
  const { form, onSubmit, mutationQuery } = useOutcome({
    modalHandler,
  });

  const { isLoading: isLoadInsert, error } = mutationQuery;

  const { fetchQuery: fetchBuget, dataApi: dataBuget } = useGetBuget();
  const { fetchQuery: fetchSavings, dataApi: dataSavings } = useGetSavings();

  const { isFetching: isLoadBuget, refetch: refetchBuget }: any = fetchBuget;
  const { isFetching: isLoadSavings, refetch: refetchSavings }: any =
    fetchSavings;

  useEffect(() => {
    async function fetch() {
      await Promise.all([refetchBuget(), refetchSavings()]);
    }
    fetch();
  }, []);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full pb-3"
      >
        <Typography
          as="div"
          variant="lead"
          className="font-bold text-gray-900 flex items-center self-start pb-3 gap-3"
        >
          <LuArrowUp className="h-5 w-5 rotate-45 text-red-700" />
          Insert Outcome
        </Typography>
        <div className="flex flex-col gap-3 py-3">
          <SelectForm
            className="text-black"
            label="Savings From"
            name="tabungan_id"
            isLoadOption={isLoadSavings}
            optionsValues={
              dataSavings?.map((item: any) => {
                return { value: item.uuid, label: item.nama_tabungan };
              }) || []
            }
          />
          <SelectForm
            className="text-black"
            label="Buget From (this month)"
            name="anggaran_id"
            isLoadOption={isLoadBuget}
            optionsValues={
              dataBuget?.map((item: any) => {
                return { value: item.uuid, label: item.nama_anggaran };
              }) || []
            }
          />
          <InputForm label="Outcome Name" name="nama_pengeluaran" />
          <InputForm label="Outcome Amount" name="nilai_pengeluaran" />
          {error?.response?.data?.message && (
            <div className="flex gap-1 items-center pt-1">
              <LuInfo className="w-2 h-2 text-red-700" />
              <span className="text-xs text-red-700">
                {error?.response?.data?.message}
              </span>
            </div>
          )}
        </div>
        <Button
          disabled={isLoadInsert}
          type="submit"
          variant="filled"
          className="flex items-center justify-center gap-3 w-full py-2 bg-red-700 border border-red-700"
        >
          {isLoadInsert ? (
            <Spinner color="blue-gray" />
          ) : (
            <LuArrowUpFromLine className="w-3 h-3 text-white" strokeWidth={3} />
          )}
          <Typography className="font-semibold capitalize" variant="small">
            Save Outcome
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
}
