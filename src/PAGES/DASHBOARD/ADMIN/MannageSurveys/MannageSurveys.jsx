import { Helmet } from "react-helmet-async";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import MannageSurveyTr from "./MannageSurveyTr";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
const MannageSurveys = () => {
  const axiosSecure = useAxiosSecure()
  const { data: surveys = [], isLoading, error, refetch } = useQuery({
    queryKey: ["allSurveys"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/survey`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Surveys</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="shadow rounded-md overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Survey Title
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Created By
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Date Created
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {surveys.map((survey,i) => (<MannageSurveyTr key={i} survey={survey} refetch={refetch}/>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MannageSurveys;
