import Loader from "../../../../COMPONENTS/LOADER/Loader";
import useAllSurveyData from "../../../../HOOKS/useAllSurveyData";
import useAuth from "../../../../HOOKS/useAuth";

const CommentedSurvey = () => {
    const { surveys, isLoading } = useAllSurveyData();
    const { user } = useAuth();    
    const commentedSurveys = surveys.filter(survey => 
        survey.comments.some(comment => comment.user === user?.email)
    );
    if(isLoading){
        return <Loader />
    }
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-8 py-8">
                <div className="shadow rounded-md overflow-x-auto">
                    <div className="bg-gray-100 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider mb-4">
                        Commented Surveys
                    </div>
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Host Name</th>
                                <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Commented At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commentedSurveys.map((survey, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-no-wrap">{survey.title}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{survey.host.name}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{survey.category}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        {survey.comments
                                            .filter(comment => comment.user === user?.email)
                                            .map((comment, i) => (
                                                <div key={i}>
                                                    {comment?.timestamp && new Date(comment.timestamp).toLocaleDateString()} {/* Format the date */}
                                                </div>
                                            ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CommentedSurvey;
