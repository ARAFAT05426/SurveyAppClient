import PropTypes from "prop-types";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import UpdateSurveyModal from "../../../../COMPONENTS/MODAL/UpdateSurvey/UpdateSurveyModal";
import { Link } from "react-router-dom";
import SecondaryBtn from "../../../../COMPONENTS/COMMON/BUTTONS/SecondaryBtn";

const SurveyTr = ({ survey, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <tr
      key={survey._id}
      className="bg-white hover:bg-gray-100 transition duration-150 ease-in-out"
    >
      <td className="px-4 lg:px-6 py-4 text-sm font-medium text-gray-900">
        {survey.title}
      </td>
      <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">
        {survey?.category}
      </td>
      <td className="px-4 lg:px-6 py-4 text-sm font-medium">
        {new Date(survey.timestamp).toLocaleDateString()}
      </td>
      <td className="px-4 lg:px-6 py-4 text-sm font-medium flex justify-around space-x-2">
        <button
          className="bg-secondary/80  px-3 py-1 rounded text-black"
          onClick={() => setIsModalOpen(true)}
        >
          <BiEdit size={24} />
        </button>
        <Link to={`/dashboard/survey/${survey._id}`}>
          <SecondaryBtn text="View" className={`p-0`} />
        </Link>
        <UpdateSurveyModal
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          refetch={refetch}
          survey={survey}
        />
      </td>
    </tr>
  );
};

SurveyTr.propTypes = {
  survey: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default SurveyTr;
