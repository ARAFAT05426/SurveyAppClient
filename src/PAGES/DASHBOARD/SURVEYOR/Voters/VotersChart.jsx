import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import Loader from '../../../../COMPONENTS/LOADER/Loader';
import useAxiosCommon from '../../../../HOOKS/useAxiosCommon';
import { useQuery } from "@tanstack/react-query";
// Defined the renderCustomizedLabel function
const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

const VotersChart = ({ id }) => {
  const axiosCommon = useAxiosCommon();
  const {
    data: survey = [],
    isLoading,
  } = useQuery({
    queryKey: ['survey', id, "chart"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey/${id}`);
      return data;
    },
  });

  if (isLoading || !survey || !survey.questions) {
    return <Loader />;
  }
  const optionsAvailable = survey.questions.some(question => question.options.length > 0);

  if (!optionsAvailable) {
    return <p>No options available for the survey questions.</p>;
  }

  // Prepared data for bar chart
  const data = survey.questions.flatMap((question) => (
    question.options.map((option) => ({
      question: question.text,
      option: option.text,
      voteCount: parseInt(option.votecount, 10),
    }))
  ));
  const enoughData = data.length > 0;

  return (
    <div>
      {enoughData ? (
        <ResponsiveContainer width="100%" height={600}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="option" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="voteCount" fill="#04ee04" minPointSize={5} barSize={75}>
              <LabelList dataKey="option" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Not enough data to show the chart.</p>
      )}
    </div>
  );
};

VotersChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VotersChart;
