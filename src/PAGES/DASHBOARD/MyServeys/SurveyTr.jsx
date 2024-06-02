import PropTypes from "prop-types";
import { BiEdit, BiTrash } from "react-icons/bi";
import UpdateSurveyModal from "../../../COMPONENTS/MODAL/UpdateSurvey/UpdateSurveyModal";
import { useState } from "react";

const SurveyTr = ({ survey }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  return (
    <>
      <tr
        key={survey._id}
        className="bg-white hover:bg-gray-100 transition duration-150 ease-in-out"
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {survey.title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {survey.description.slice(0, 100)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">50</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
          <button className="text-indigo-600 hover:text-indigo-900">
            <BiEdit onClick={() => setIsModalOpen(true)} size={24} />
            <UpdateSurveyModal
              isOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              survey={survey}
            />
          </button>
          <button className="ml-2 text-red-600 hover:text-red-900">
            <BiTrash size={24} />
          </button>
        </td>
      </tr>
    </>
  );
};

SurveyTr.propTypes = {
  survey: PropTypes.object,
};

export default SurveyTr;
