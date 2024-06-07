import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../HOOKS/useAxiosCommon';
import { useParams } from 'react-router-dom';
import Loader from '../../COMPONENTS/LOADER/Loader';
import Surveynow from './Surveynow';
import SurveyComments from './SurveyComments';

const SurveyDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const {
    data: survey = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['survey'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <Surveynow survey={survey} />
          <SurveyComments surveyId={survey._id} comments={survey.comments} refetch={refetch} />
        </div>
      </div>
    </section>
  );
};

export default SurveyDetails;
