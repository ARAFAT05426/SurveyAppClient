import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../HOOKS/useAxiosCommon";
import Loader from "../../../COMPONENTS/LOADER/Loader";
import SurveyCard from "../../../COMPONENTS/CARD/SurveyCard";
import Heading from "../../../COMPONENTS/SECTIONS/Heading";
const LatestSurveys = () => {
  const axiosCommon = useAxiosCommon();
  const { data: surveys = [], isLoading, error } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey?latest=true`);
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
        title="Discover the Latest Surveys"
        subtitle="Stay Updated with the Newest Surveys and Share Your Opinions"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-32">
        {surveys.map((survey) => (
          <SurveyCard key={survey._id} survey={survey} />
        ))}
      </div>
    </section>
  );
};

export default LatestSurveys;
