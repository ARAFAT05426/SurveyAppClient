import { useState } from "react";
import SurveyCard from "../../COMPONENTS/CARD/SurveyCard";
import { surveyCategories } from "../../COMPONENTS/surveyCategories";
import Loader from "../../COMPONENTS/LOADER/Loader";
import Heading from "../../COMPONENTS/SECTIONS/Heading";
import useAllSurveyData from "../../HOOKS/useAllSurveyData";
const Surveys = () => {
  const { surveys, isLoading, error } = useAllSurveyData();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const filteredSurveys = selectedCategory
    ? surveys.filter((survey) => survey.category === selectedCategory)
    : surveys;
  const sortedSurveys = sortBy
    ? filteredSurveys.slice().sort((a, b) => {
        if (sortBy === "voteCount") {
          return b.voters.length - a.voters.length;
        } else if (sortBy === "voteCountLowToHigh") {
          return a.voters.length - b.voters.length;
        } else {
          return 0;
        }
      })
    : filteredSurveys;
  return (
    <section className="px-32 mt-20">
      <Heading
        title="Explore Our Published Surveys"
        subtitle="Engage with various topics and share your opinions"
      />
      <div className="flex flex-col lg:flex-row items-center gap-5 my-10 w-fit mx-auto">
        <select
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
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 outline-none"
        >
          <option value="">Sort by</option>
          <option value="voteCount">Vote Count (High to Low)</option>
          <option value="voteCountLowToHigh">Vote Count (Low to High)</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {sortedSurveys?.map((survey, i) => (
          <SurveyCard key={i} survey={survey} />
        ))}
      </div>
    </section>
  );
};

export default Surveys;
