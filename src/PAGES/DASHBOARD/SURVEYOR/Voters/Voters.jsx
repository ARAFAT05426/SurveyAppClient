import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
import Heading from "../../../../COMPONENTS/SECTIONS/Heading";

const Voters = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure()
    const { data: voters, isLoading, error } = useQuery({
        queryKey: ["survey", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/survey/voters/${id}`);
            return data;
        },
        enabled: !!id
    });
    console.log(voters);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <section className="p-5 min-h-screen">
            <Heading title={`Voters for Survey ${voters?.title}`} subtitle="Check Whom voted your survey" />
            <div className="overflow-x-auto py-10">
                <table className="min-w-full bg-white shadow-md rounded-md p-1">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                                date
                            </th>
                            <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {voters?.voters && voters.voters.length > 0 ? (
                            voters.voters.map((voter, index) => (
                                <tr key={index}>
                                    <td className="px-4 lg:px-6 py-3">{index+1}</td>
                                    <td className="px-4 lg:px-6 py-3">{voter?.name}</td>
                                    <td className="px-4 lg:px-6 py-3">{voter?.email}</td>
                                    <td className="px-4 lg:px-6 py-3">{new Date(voter?.timestamp).toLocaleDateString()}</td>
                                    <td className="px-4 lg:px-6 py-3">{new Date(voter?.timestamp).toLocaleTimeString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="px-4 lg:px-6 py-3 text-center">No voters found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

Voters.propTypes = {
    id: PropTypes.string,
    survey: PropTypes.shape({
        voters: PropTypes.arrayOf(
            PropTypes.shape({
                email: PropTypes.string.isRequired,
                timestamp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
            })
        )
    })
};

export default Voters;
