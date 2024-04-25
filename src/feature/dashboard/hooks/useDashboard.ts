import { fetchDashboard } from "@/shared/api/fetch/dashboard";
import useFetchHook from "@/shared/api/useFetchHook";
import React, { useState } from "react";
import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export const prefetchListQuery = async (
  queryClient: QueryClient,
  type: any,
  params: any
) => {
  const fetchDataDashboard = fetchDashboard();
  await queryClient.prefetchQuery(
    fetchDataDashboard.key,
    fetchDataDashboard.api
  );
};

export default function useDashboard() {
  const [indexSaving, setIndexSaving] = useState(0);
  const [isLoadHandleSaving, setIsloadHandle] = useState(false);
  const fetchDataDashboard = fetchDashboard();
  const fetchQuery: any = useFetchHook({
    keys: fetchDataDashboard.key,
    api: fetchDataDashboard.api,
    option: {
      enabled: false,
      onSuccess: () => {
        // Ketika refetch berhasil, jalankan adjustChildWidth
        // adjustChildWidth();
      },
      onError: (error: any) => {
        toast.error("Api failed!");
      },
    },
  });

  const dataApi = fetchQuery?.data?.data;

  const handlerToogler = ({ type }: { type: "next" | "prev" }) => {
    setIsloadHandle(true);
    setTimeout(() => {
      if (type === "prev") {
        setIndexSaving((prev) =>
          prev === 0 ? Number(dataApi?.savings?.length - 1) : Number(prev - 1)
        );
      } else {
        setIndexSaving((prev) =>
          prev === Number(dataApi?.savings?.length - 1) ? 0 : Number(prev + 1)
        );
      }
      setIsloadHandle(false);
    }, 500);
  };

  return {
    fetchQuery,
    dataApi,
    handlerToogler,
    isLoadHandleSaving,
    indexSaving,
  };
}
