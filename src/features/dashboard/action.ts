import { useQuery } from "@tanstack/react-query";
import { fetchMyWallet } from "./service";

export const useFetchMyWallet = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: fetchMyWallet,
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
