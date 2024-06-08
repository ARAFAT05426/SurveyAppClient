import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
import Heading from "../../../../COMPONENTS/SECTIONS/Heading";
import VoterTable from "./VoterTable";
import Loader from "../../../../COMPONENTS/LOADER/Loader";

const Voters = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure()
    const { data: voters, isLoading } = useQuery({
        queryKey: ["survey", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/survey/voters/${id}`);
            return data;
        },
        enabled: !!id
    });
    if (isLoading) {
        return <Loader />
    }
    return (
        <section className="p-5 min-h-screen">
            <Heading title={`Voters for Survey ${voters?.title}`} subtitle="Check Whom voted your survey" />
            <VoterTable voters={voters} />
        </section>
    );
};

export default Voters;
