import PropTypes from "prop-types";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import useAxiosSecure from "../../HOOKS/useAxiosSecure";
import useToast from "../../HOOKS/useToast";
import { useMutation } from "@tanstack/react-query";

const DeleteSurveyModal = ({ isOpen, setIsModalOpen, surveyId, refetch }) => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { showToast } = useToast();
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/survey/${id}`)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      showToast("Survey deleted successfully!", "success", "green");
      setIsModalOpen(false);
    },
    onError: () => {
      showToast("Failed to delete survey. Please try again.", "error", "red");
    }
  })

  const handleDelete = async () => {
    try {
      setLoading(true);
      await mutateAsync(surveyId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all space-y-5">
                <div className="flex justify-end">
                  <RiCloseCircleLine className="cursor-pointer" onClick={() => setIsModalOpen(false)} size={35} />
                </div>
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Delete Survey
                </DialogTitle>
                <p className="text-sm text-gray-500 mb-4 text-center">Are you sure you want to delete this survey?</p>
                <div className="flex justify-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
                    onClick={handleDelete}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

DeleteSurveyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  surveyId: PropTypes.any, // No longer marked as required
  refetch: PropTypes.func.isRequired,
};

export default DeleteSurveyModal;
