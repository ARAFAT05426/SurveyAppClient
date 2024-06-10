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

  // Filter surveys by deadline
  const availableSurveys = surveys?.filter(survey => 
    new Date(survey.deadline.to) > new Date()
  );

  if (isLoading) return <Loader />;

  // Filter surveys by selected category
  const filteredSurveys = selectedCategory
    ? availableSurveys.filter(survey => survey.category === selectedCategory)
    : availableSurveys;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <Helmet>
        <title>Participate in Surveys</title>
      </Helmet>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="flex flex-col md:flex-row justify-start mb-4 items-start gap-3">
            <label htmlFor="categorySelect" className="mr-2">
              Select Category:
            </label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 outline-none w-fit"
            >
              <option className="text-xs" value="">All Categories</option>
              {surveyCategories.map((category, index) => (
                <option className="text-xs" key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="shadow rounded-md overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead className="bg-gray-100">
                <tr>
                  <th className="md:text-base px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-tight md:tracking-wider">
                    #
                  </th>
                  <th className="md:text-base px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-tight md:tracking-wider">
                    Title
                  </th>
                  <th className="md:text-base px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-tight md:tracking-wider">
                    Category
                  </th>
                  <th className="md:text-base px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-tight md:tracking-wider">
                    Question Count
                  </th>
                  <th className="md:text-base px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-tight md:tracking-wider">
                    Deadline
                  </th>
                  <th className="md:text-base px-2 md:px-4 lg:px-6 py-1 lg:py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-tight md:tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSurveys.map((survey, index) => (
                  <tr key={index}>
                    <td className="px-2 md:px-4 text-xs md:text-base lg:px-6 py-1 lg:py-3">
                      {index + 1}
                    </td>
                    <td className="px-2 md:px-4 text-xs md:text-base lg:px-6 py-1 lg:py-3">
                      {survey.title.length > 10 ? `${survey.title.slice(0, 10)}...` : survey.title}
                    </td>
                    <td className="px-2 md:px-4 text-xs md:text-base lg:px-6 py-1 lg:py-3">
                      {survey.category.length > 15 ? `${survey.category.slice(0, 15)}...` : survey.category}
                    </td>
                    <td className="px-2 md:px-4 text-xs md:text-base lg:px-6 py-1 lg:py-3">
                      {survey.questions.length}
                    </td>
                    <td className="px-2 md:px-4 text-xs md:text-base lg:px-6 py-1 lg:py-3">
                      {new Date(survey.deadline.to).toLocaleDateString()}
                    </td>
                    <td className="px-2 md:px-4 text-xs md:text-base lg:px-6 py-1 lg:py-3 w-fit">
                      <Link to={`/survey/${survey?._id}`}>
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
  );
};

export default ParticipateSurvey;
