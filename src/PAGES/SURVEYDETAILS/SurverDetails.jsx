import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../HOOKS/useAxiosCommon";
import { useParams } from "react-router-dom";
import Loader from "../../COMPONENTS/LOADER/Loader";
import Surveynow from "./Surveynow";

const SurverDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const {
    data: survey = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey/${id}`);
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="min-h-navMinus pt-16">
      <div className="flex justify-between">
        <div className="w-1/2 h-[80vh] flex justify-center">
          <img className="w-full" src="/details.gif" alt="" />
        </div>
        <Surveynow />
      </div>
    </section>
  );
};

export default SurverDetails;
