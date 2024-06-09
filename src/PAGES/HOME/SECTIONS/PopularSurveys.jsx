import Loader from "../../../COMPONENTS/LOADER/Loader";
import SurveyCard from "../../../COMPONENTS/CARD/SurveyCard";
import Heading from "../../../COMPONENTS/SECTIONS/Heading";
import useAxiosCommon from "../../../HOOKS/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const PopularSurveys = () => {
  const axiosCommon = useAxiosCommon();
  const { data: surveys = [], isLoading, error } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey?popular=true`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="py-20 space-y-10">
      <Heading
        title="Explore Our Most Featured Surveys"
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
