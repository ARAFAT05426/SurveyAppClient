import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../../../../COMPONENTS/LOADER/Loader";
import useAllSurveyData from "../../../../HOOKS/useAllSurveyData";
import { surveyCategories } from "../../../../COMPONENTS/surveyCategories";
import SecondaryBtn from "../../../../COMPONENTS/COMMON/BUTTONS/SecondaryBtn";
import { Link } from "react-router-dom";

const ParticipateSurvey = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { surveys, isLoading } = useAllSurveyData();

  if (isLoading) return <Loader />;

  const filteredSurveys = selectedCategory
    ? surveys.filter((survey) => survey.category === selectedCategory)
    : surveys;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Participate in Surveys</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="flex justify-start mb-4 items-center">
              <label htmlFor="categorySelect" className="mr-2">
                Select Category:
              </label>
              <select
                id="categorySelect"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 outline-none"
              >
                <option value="">All Categories</option>
                {surveyCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="shadow rounded-md overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Question Count
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Deadline
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSurveys.map((survey, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3">{index + 1}</td>
                      <td className="px-6 py-3">{survey.title}</td>
                      <td className="px-6 py-3">{survey.category}</td>
                      <td className="px-6 py-3">{survey.questions.length}</td>
                      <td className="px-6 py-3">
                        {new Date(survey.deadline.to).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3">
                        <Link to={`/survey/${survey._id}`}>
                          <SecondaryBtn text="Participate" className={`p-0 text-xs tracking-tight`} />
                        </Link>
                      </td>
                    </tr>
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

export default ParticipateSurvey;
