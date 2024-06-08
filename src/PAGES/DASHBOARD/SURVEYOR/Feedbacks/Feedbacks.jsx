import Loader from "../../../../COMPONENTS/LOADER/Loader";
import useAllSurveyData from "../../../../HOOKS/useAllSurveyData";

const Feedbacks = () => {
    const { surveys, isLoading } = useAllSurveyData();
    const unpublishedSurveys = surveys?.filter(survey => survey.status === "unpublish");
    
    if (isLoading) {
        return <Loader />;
    }

    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Unpublished Surveys</h2>
            {unpublishedSurveys.length > 0 ? (
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Title</th>
                            <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Status</th>
                            <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Date</th>
                            <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Feedbacks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unpublishedSurveys.map(survey => (
                            <tr key={survey.id} className="border-b border-gray-200">
                                <td className="py-3 px-4 text-gray-700">{survey?.title}</td>
                                <td className="py-3 px-4 text-gray-700">{survey?.status}</td>
                                <td className="py-3 px-4 text-gray-700">{new Date(survey.timestamp).toLocaleDateString()}</td>
                                <td className="py-3 px-4 text-gray-700">{survey?.feedback.slice(0, 25)}..</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-700">No unpublished surveys found.</p>
            )}
        </section>
    );
};

export default Feedbacks;
