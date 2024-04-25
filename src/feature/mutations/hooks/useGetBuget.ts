import { fetchBugetByMonth } from "@/shared/api/fetch/bugets";
import useFetchHook from "@/shared/api/useFetchHook";
import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export const prefetchListQuery = async (
  queryClient: QueryClient,
  type: any,
  params: any
) => {
  const fetchBuget = fetchBugetByMonth();
  await queryClient.prefetchQuery(fetchBuget.key, fetchBuget.api);
};

export default function useGetBuget() {
  const fetchBuget = fetchBugetByMonth();
  const fetchQuery: any = useFetchHook({
    keys: fetchBuget.key,
    api: fetchBuget.api,
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
