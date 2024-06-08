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
import { useQuery } from 'react-query';
import useAxiosCommon from '../../../../HOOKS/useAxiosCommon';

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
    data: survey = {},
    isLoading,
  } = useQuery({
    queryKey: ['survey', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey/${id}`);
      return data;
    },
  });

  if (isLoading || !survey) {
    return <Loader />;
  }

  const data = survey.questions.map((question) => ({
    name: question.text,
    totalvote: question.options.reduce((total, option) => total + parseInt(option.votecount, 10), 0),
    amt: 2400,
  }));

  // Check if there is enough data to show the chart
  const enoughData = data.length > 0;

  return (
    <div>
      {enoughData ? (
        <ResponsiveContainer width="100%" height={700}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalvote" fill="#FECD08" minPointSize={5}>
              <LabelList dataKey="name" content={renderCustomizedLabel} />
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
