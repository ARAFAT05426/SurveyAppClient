import Loader from "../../../COMPONENTS/LOADER/Loader";
import SurveyCard from "../../../COMPONENTS/CARD/SurveyCard";
import Heading from "../../../COMPONENTS/SECTIONS/Heading";
import useAllSurveyData from "../../../HOOKS/useAllSurveyData";

const PopularSurveys = () => {
  const { surveys, isLoading } = useAllSurveyData()

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-20 space-y-10">
      <Heading
        title="Explore Our Most Feautured Surveys"
        subtitle="Engage with Trending Topics and Share Your Insights on the Most Discussed Surveys"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-32">
        {surveys.map((survey) => (
          <SurveyCard key={survey._id} survey={survey} />
        ))}
      </div>
    </section>
  );
};

export default PopularSurveys;
