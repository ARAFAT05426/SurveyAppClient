import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import SurveyTr from "./SurveyTr";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
import useAuth from "../../../../HOOKS/useAuth";

const MySurveys = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const { data: surveys = {}, isLoading, refetch } = useQuery({
      queryKey: ['adminStats'],
      queryFn: async () => {
          const { data } = await axiosSecure.get(`/survey/mysurvey/${user?.email}`);
          return data;
      },
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="p-5 min-h-screen">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          My Surveys
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md p-1">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">
                Category
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
