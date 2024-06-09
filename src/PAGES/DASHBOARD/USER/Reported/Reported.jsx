import React from "react";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import useAllStatusData from "../../../../HOOKS/useAllStatusData";
import useAuth from "../../../../HOOKS/useAuth";

const Reported = () => {
    const { user } = useAuth();
    const { surveys, isLoading } = useAllStatusData();

    // Filter surveys where user's email matches any of the report emails
    const filteredSurveys = surveys.filter(survey =>
        survey?.reports?.some(report => report.user === user.email)
    );

    return (
        <section>
            <div className="container mx-auto px-4 sm:px-8 py-8">
                <div className="shadow rounded-md overflow-x-auto">
                    <div className="bg-gray-100 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Reported Surveys
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Host Name</th>
                                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Reported At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSurveys.map(survey => (
                                    <tr key={survey._id.$oid}>
                                        <td className="px-6 py-4 whitespace-no-wrap">{survey.title}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{survey.host.name}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{survey.category}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            {survey.reports
                                                .filter(report => report.user === user.email)
                                                .map((report, index) => (
                                                    <div key={index}>
                                                        {report.time && new Date(report.time).toLocaleDateString()} {/* Format the date */}
                                                    </div>
                                                ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reported;
