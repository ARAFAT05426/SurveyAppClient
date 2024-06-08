import PropTypes from "prop-types";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import UnpublishModal from "../../../../COMPONENTS/MODAL/UnpublishModal";

const MannageSurveyTr = ({ survey, refetch }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{survey.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{survey.host.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className={`text-sm leading-5 ${survey?.status === "publish" ? "text-primary" : "text-red-500"}`}>{survey?.status}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {new Date(survey.timestamp).toLocaleDateString()}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
        <button onClick={() => setIsDeleteModalOpen(true)}>
          <RiDeleteBin6Line size={35} className="p-1 cursor-pointer" />
        </button>
        <div>
          <UnpublishModal
            isOpen={isDeleteModalOpen}
            setIsModalOpen={setIsDeleteModalOpen}
            survey={survey}
            refetch={refetch}
          />
        </div>
      </td>
    </tr>
  );
};

MannageSurveyTr.propTypes = {
  survey: PropTypes.object.isRequired,
  refetch: PropTypes.func
};

export default MannageSurveyTr;
