import Loader from "../../../COMPONENTS/LOADER/Loader";
import useAllSurveyData from "../../../HOOKS/useAllSurveyData";
import SurveyTr from "./SurveyTr";

const MySurveys = () => {
  const { surveys, refetch, isLoading } = useAllSurveyData();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="p-5 bg-slate-50 min-h-screen">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          My Surveys
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md p-1">
          <thead className="">
            <tr>
              <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                Added
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {surveys.map((survey) => (
              <SurveyTr
                key={survey._id}
                survey={survey}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MySurveys;
