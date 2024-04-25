import { fetchAllSavings } from "@/shared/api/fetch/savings";
import useFetchHook from "@/shared/api/useFetchHook";
import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export const prefetchListQuery = async (
  queryClient: QueryClient,
  type: any,
  params: any
) => {
  const detchSavings = fetchAllSavings();
  await queryClient.prefetchQuery(detchSavings.key, detchSavings.api);
};

export default function useGetSavings() {
  const detchSavings = fetchAllSavings();
  const fetchQuery: any = useFetchHook({
    keys: detchSavings.key,
    api: detchSavings.api,
    options: {
      onError: (error: any) => {
        toast.error(error?.response?.data?.message);
      },
    },
  });

  const dataApi = fetchQuery?.data?.data;

  return {
    fetchQuery,
    dataApi,
  };
}
