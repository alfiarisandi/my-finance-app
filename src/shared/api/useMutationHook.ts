import { useMutation } from "react-query";

const useMutationHook = ({ api, options }: any) => {
  const mutationQuery: any = useMutation(api, {
    ...options,
    staleTime: 1000, // 1 second
  });

  return mutationQuery;
};

export default useMutationHook;
