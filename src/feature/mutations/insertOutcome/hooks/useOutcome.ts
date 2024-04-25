import useDashboard from "@/feature/dashboard/hooks/useDashboard";
import { fetchBugetByMonth } from "@/shared/api/fetch/bugets";
import { InsertOutcome } from "@/shared/api/mutation/moneyMutations";
import useFetchHook from "@/shared/api/useFetchHook";
import useMutationHook from "@/shared/api/useMutationHook";
import {
  FETCH_ANGGARAN_BYMONTH,
  FETCH_DASHBOARD,
} from "@/shared/constants/endpoint";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { QueryClient } from "react-query";
import { toast } from "react-toastify";
import * as z from "zod";

export default function useOutcome({
  modalHandler,
}: {
  modalHandler: () => void;
}) {
  const { fetchQuery: fetchDashboard } = useDashboard();
  const { refetch: refetchDataDashboard }: any = fetchDashboard;

  const outcomeSchema = z.object({
    anggaran_id: z
      .string({ invalid_type_error: "Buget from is required." })
      .nonempty("Buget is required."),
    tabungan_id: z.string().nonempty("Savings is required."),
    nama_pengeluaran: z.string().nonempty("Outcome name is required."),
    nilai_pengeluaran: z.string().nonempty("Outcome amount is required."),
  });

  const form = useForm<z.infer<typeof outcomeSchema>>({
    resolver: zodResolver(outcomeSchema),
    defaultValues: {
      anggaran_id: "",
      tabungan_id: "",
    },
  });

  const mutationQuery = useMutationHook({
    api: InsertOutcome,
    options: {
      onError: (error: any) => {
        toast.error(error?.response?.data?.message);
      },
      onSuccess: async (res: any) => {
        if (res?.status === 200) {
          toast.success("Success.");
          await refetchDataDashboard();
          setTimeout(() => {
            modalHandler();
          }, 500);
        }
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof outcomeSchema>) => {
    await mutationQuery.mutate(values);
  };

  return {
    form,
    onSubmit,
    mutationQuery,
  };
}
