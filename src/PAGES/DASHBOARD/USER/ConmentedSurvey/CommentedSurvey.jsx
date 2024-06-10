import useAuth from "../../../../HOOKS/useAuth";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import useAllStatusData from "../../../../HOOKS/useAllStatusData";

const CommentedSurvey = () => {
    const { user } = useAuth();
    const { surveys, isLoading } = useAllStatusData();
    const commentedSurveys = surveys.filter(survey =>
        survey.comments?.some(comment => comment.user === user.email)
    );

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="rounded-lg overflow-x-auto">
                    <div className="bg-gray-100 px-6 py-3 text-left text-xs leading-4 font-semibold uppercase tracking-wider">
                        Commented Surveys
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <table className="min-w-full shadow-md leading-normal table-auto">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Host Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                        Commented At
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {commentedSurveys.map((survey, index) => (
                                    <tr key={index} className="bg-white border-b border-gray-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {survey.title}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {survey.host.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {survey.category}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {survey.comments
                                                .filter(comment => comment.user === user.email)
                                                .map((comment, i) => (
                                                    <div key={i}>
                                                        {new Date(comment.timestamp).toLocaleDateString()} {/* Format the date */}
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

export default CommentedSurvey;
