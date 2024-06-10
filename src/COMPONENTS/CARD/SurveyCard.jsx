import PropTypes from "prop-types";
import { RiAlarmLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
  const { title, description, category, deadline, voters } = survey;
  return (
    <Link to={`/survey/${survey?._id}`}>
      <div className="p-5 rounded-lg shadow-md border hover:shadow-xl transition-shadow space-y-5">
        <h3 className="text-xl font-bold mb-2">{title.slice(0, 30)}</h3>
        <p className="text-gray-600 text-wrap">{description.slice(0, 35)}..</p>
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <RiAlarmLine size={20} />
            <span>{new Date(deadline.to).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
            Total Vote Count: {voters?.length || 0}
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
