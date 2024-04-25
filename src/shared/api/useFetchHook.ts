import { useQuery } from "react-query";

const useFetchHook = ({ keys, api, initialData, option }: any) => {
  const fetchQuery = useQuery(keys, api, {
    ...(initialData && { initialData }),
    ...option,
    staleTime: 30 * 1000, // 30 seconds
  });

  return fetchQuery;
};

export default useFetchHook;
