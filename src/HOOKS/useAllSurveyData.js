import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllSurveyData = () => {
  const axiosCommon = useAxiosCommon()

  const { data: surveys = [], refetch, isLoading, error } = useQuery({
    queryKey: ["surveys"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey`);
      return data;
    },
  });

  return { surveys, refetch, isLoading, error };
};

export default useAllSurveyData;
