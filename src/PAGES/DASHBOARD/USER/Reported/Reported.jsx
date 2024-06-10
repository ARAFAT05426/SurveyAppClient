import Loader from "../../../../COMPONENTS/LOADER/Loader";
import useAllStatusData from "../../../../HOOKS/useAllStatusData";
import useAuth from "../../../../HOOKS/useAuth";

const Reported = () => {
    const { user } = useAuth();
    const { surveys, isLoading } = useAllStatusData();
    const filteredSurveys = surveys.filter(survey =>
        survey?.reports?.some(report => report.user === user.email)
    );

    return (
        <section>
            <div className="container mx-auto px-4 sm:px-8 py-8">
                <div className="shadow rounded-md overflow-x-auto">
                    <div className="bg-gray-100 px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Reported Surveys
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <table className="w-full md:min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">Surveyor</th>
                                    <th className="px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs md:text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">Reported At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSurveys.map((survey, i) => (
                                    <tr key={i}>
                                        <td className="px-2 md:px-4 lg:px-6 py-2 lg:py-4 text-xs md:text-base">{survey.title.slice(0, 7)}....</td>
                                        <td className="px-2 md:px-4 lg:px-6 py-2 lg:py-4 text-xs md:text-base">{survey.host.name}</td>
                                        <td className="px-2 md:px-4 lg:px-6 py-2 lg:py-4 text-xs md:text-base">{survey.category.slice(0,10)}...</td>
                                        <td className="px-2 md:px-4 lg:px-6 py-2 lg:py-4 text-xs md:text-base">
                                            {survey.reports
                                                .filter(report => report.user === user.email)
                                                .map((report, index) => (
                                                    <div key={index}>
                                                        {report.time && new Date(report.time).toLocaleDateString()}
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
