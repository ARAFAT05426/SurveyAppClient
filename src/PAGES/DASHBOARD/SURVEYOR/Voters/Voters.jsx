import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
import Heading from "../../../../COMPONENTS/SECTIONS/Heading";
import VoterTable from "./VoterTable";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import { useState } from "react";
import VotersChart from "./VotersChart";

const Voters = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [toggle, setToggle] = useState(false);
    
    const { data: voters, isLoading } = useQuery({
        queryKey: ["survey", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/survey/voters/${id}`);
            return data;
        },
        enabled: !!id
    });

    if (isLoading) {
        return <Loader />;
    }

    const toggleHandler = () => {
        setToggle(prevToggle => !prevToggle);
    };

    return (
        <section className="p-5 min-h-screen">
            <Heading title={`Voters for Survey ${voters?.title}`} subtitle="Check Who Voted Your Survey" />
            <label
                htmlFor='Toggle3'
                className='inline-flex w-full justify-center items-center px-2 mt-7 rounded-md cursor-pointer text-gray-800'
            >
                <input
                    onChange={toggleHandler}
                    id='Toggle3'
                    type='checkbox'
                    className='hidden peer'
                    checked={toggle}
                />
                <span className='px-4 py-1 rounded-l-md bg-primary text-black font-bold peer-checked:bg-gray-300'>
                    Table
                </span>
                <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-primary text-black font-bold'>
                    Chart
                </span>
            </label>
            {toggle ? (
                <VotersChart id={id} />
            ) : (
                <VoterTable voters={voters} />
            )}
        </section>
    );
};

export default Voters;
