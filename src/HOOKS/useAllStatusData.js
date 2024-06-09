import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
const useAllStatusData = () => {
  const axiosCommon = useAxiosCommon();

  const { data: surveys = [], isLoading, error } = useQuery({
    queryKey: ["allstatus"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey`);
      return data;
    },
  });

  return { surveys, isLoading, error };
};

export default useAllStatusData;
