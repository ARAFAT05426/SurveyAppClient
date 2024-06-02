import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../HOOKS/useAxiosCommon";
import { useParams } from "react-router-dom";
import Loader from "../../COMPONENTS/LOADER/Loader";

const SurverDetails = () => {
    const {id} = useParams();
    const axiosCommon = useAxiosCommon()
    const { data: survey = [], refetch, isLoading } = useQuery({
      queryKey: ["survey"],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/survey/${id}`);
        return data;
      },
    });
    if(isLoading){
        return <Loader />
    }
    return (
        <section>
            <div className="flex justify-between">
                <img className="w-full" src="/details.gif" alt="" />
            </div>
        </section>
    );
};

export default SurverDetails;