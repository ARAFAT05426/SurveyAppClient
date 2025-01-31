import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllSurveyData = () => {
  const axiosCommon = useAxiosCommon();

  const { data: surveys = [], isLoading, error } = useQuery({
    queryKey: ["publishedSurveys"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey?published=true`);
      return data;
    },
  });

  return { surveys, isLoading, error };
};

export default useAllSurveyData;
