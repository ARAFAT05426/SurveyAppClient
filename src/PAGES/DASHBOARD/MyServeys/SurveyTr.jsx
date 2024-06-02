import PropTypes from "prop-types";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useState } from "react";
import UpdateSurveyModal from "../../../COMPONENTS/MODAL/UpdateSurvey/UpdateSurveyModal";
import DeleteSurveyModal from "../../../COMPONENTS/MODAL/DeleteSurveyModal";

const SurveyTr = ({ survey, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isdeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <tr
      key={survey._id}
      className="bg-white hover:bg-gray-100 transition duration-150 ease-in-out"
    >
      <td className="px-4 lg:px-6 py-4 text-sm font-medium text-gray-900">
        {survey.title}
      </td>
      <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">
        {survey.description.slice(0, 100)}
      </td>
      <td className="px-4 lg:px-6 py-4 text-sm font-medium">
        {new Date(survey.timestamp).toLocaleDateString()}
      </td>
      <td className="px-4 lg:px-6 py-4 text-sm font-medium flex justify-around space-x-2">
        <button
          className="bg-blue-500 px-3 py-1 rounded text-white"
          onClick={() => setIsModalOpen(true)}
        >
          <BiEdit size={24} />
        </button>
        <button className="bg-red-500 px-3 py-1 rounded text-white">
          <BiTrash size={24} onClick={() => setIsDeleteModalOpen(true)} />
        </button>
        <DeleteSurveyModal isOpen={isdeleteModalOpen} setIsModalOpen={setIsDeleteModalOpen} surveyId={survey._id} refetch={refetch} />
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
