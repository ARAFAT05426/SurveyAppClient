import PropTypes from "prop-types";
import { FaRegFaceSmile, FaRegFaceFrown } from "react-icons/fa6";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiAlarmLine } from "react-icons/ri";

const SurveyCard = ({ survey }) => {
  const { title, description, category, deadline, reaction } = survey;
  return (
    <div className="p-5 rounded-lg shadow-md border hover:shadow-lg transition-shadow space-y-5">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <div className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-1 text-gray-500">
          <RiAlarmLine size={24} /> {new Date(deadline.to).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <FaRegFaceSmile className="cursor-pointer" size={20} /> %
          </div>
          <div className="flex items-center gap-1">
            <FaRegFaceFrown className="cursor-pointer" size={20} /> %
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-thinHeading bg-secondary/50 text-gray-500 w-fit rounded-full px-2 py-[2px]">
          # {category}
        </div>

        <div className="flex items-center gap-3">
          {reaction.includes("like") && (
            <BiLike className="cursor-pointer" size={20} />
          )}
          {reaction.includes("dislike") && (
            <BiDislike className="cursor-pointer" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

SurveyCard.propTypes = {
  survey: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deadline: PropTypes.shape({
      to: PropTypes.string.isRequired,
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    reaction: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SurveyCard;
