import PropTypes from "prop-types";
import { FaRegSmile, FaRegFrown } from "react-icons/fa";
import { RiAlarmLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
  const { title, description, category, deadline, reaction, questions } = survey;
  const totalVoteCount = questions.reduce((acc, curr) => {
    curr.options.forEach(option => {
      acc += option.votecount;
    });
    return acc;
  }, 0);

  return (
    <Link to={`/survey/${survey?._id}`}>
      <div className="p-5 rounded-lg shadow-md border hover:shadow-lg transition-shadow space-y-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <RiAlarmLine size={20} />
            <span>{new Date(deadline.to).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaRegSmile size={20} />
              <span>{reaction[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegFrown size={20} />
              <span>{reaction[1]}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
            Total Vote Count: {totalVoteCount}
          </div>
          <div className="text-sm font-thinHeading bg-secondary/50 text-gray-500 w-fit rounded-full px-2 py-[2px]">
            #{category}
          </div>
        </div>
      </div>
    </Link>
  );
};

SurveyCard.propTypes = {
  survey: PropTypes.object.isRequired,
};

export default SurveyCard;
