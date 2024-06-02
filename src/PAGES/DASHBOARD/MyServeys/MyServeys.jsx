import Loader from "../../../COMPONENTS/LOADER/Loader";
import useAllSurveyData from "../../../HOOKS/useAllSurveyData";
import SurveyTr from "./SurveyTr";

const MySurveys = () => {
  const { surveys, isLoading } = useAllSurveyData();

  const handleDelete = (survey) => {
    // Handle delete functionality
    console.log("Delete survey:", survey);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="p-5 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          My Surveys
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Total Votes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {surveys.map((survey) => (
                <SurveyTr
                  key={survey._id}
                  survey={survey}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MySurveys;
