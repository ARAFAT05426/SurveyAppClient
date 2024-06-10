import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import MannageSurveyTr from "./MannageSurveyTr";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
import { surveyCategories } from "../../../../COMPONENTS/surveyCategories";

const MannageSurveys = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: surveys = [], isLoading, error, refetch } = useQuery({
    queryKey: ["allStatus"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/survey`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  // Filter surveys by selected category
  const filteredSurveys = selectedCategory
    ? surveys.filter((survey) => survey.category === selectedCategory)
    : surveys;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Surveys</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            {/* Select dropdown for filtering by category */}
            <div className="flex items-center mb-4">
              <label htmlFor="categorySelect" className="mr-2">
                Filter by Category:
              </label>
              <select
                id="categorySelect"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 outline-none"
              >
              <option className="text-xs" value="">All Categories</option>
              {surveyCategories.map((category, index) => (
                <option className="text-xs" key={index} value={category}>
                  {category}
                </option>
              ))}
              </select>
            </div>
            {/* Table displaying surveys */}
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
                  {/* Render filtered surveys */}
                  {filteredSurveys.map((survey, i) => (
                    <MannageSurveyTr key={i} survey={survey} refetch={refetch} />
                  ))}
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
