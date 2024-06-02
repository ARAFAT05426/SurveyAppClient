import PropTypes from "prop-types";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import UpdateSurveyForm from "./UpdateSurveyForm";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import useToast from "../../../HOOKS/useToast";

const UpdateSurveyModal = ({ isOpen, setIsModalOpen, survey }) => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [dates, setDates] = useState({
    startDate: new Date(survey.deadline?.from || new Date()),
    endDate: new Date(survey.deadline?.to || new Date()),
    key: 'selection',
  });
  const handleDates = (item) => {
    setDates(item.selection);
  };
  const { showToast } = useToast();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: survey.title,
      description: survey.description,
      category: survey.category,
      option1: survey.options[0],
      option2: survey.options[1],
    }
  });

  const handleUpdate = async (data) => {
    const surveyData = {
      title: data.title,
      description: data.description,
      options: [data.option1, data.option2],
      category: data.category,
      deadline: { from: dates.startDate, to: dates.endDate },
      status: "publish",
      timestamp: Date.now(),
      reaction: ["like", "dislike"],
      feedback: ""
    };

    try {
      setLoading(true);
      await axiosSecure.put(`/survey/${survey._id}`, surveyData);
      showToast("Survey updated successfully!", "success", "green");
      setIsModalOpen(false);
    } catch (err) {
      showToast("Failed to update survey. Please try again.", "error", "red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
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
                <DialogTitle as="h3" className="text-lg font-medium text-center leading-6 text-gray-900">
                  Update Survey Info
                </DialogTitle>
                <UpdateSurveyForm
                  register={register}
                  dates={dates}
                  loading={loading}
                  handleDates={handleDates}
                  handleSubmit={handleSubmit}
                  handleUpdate={handleUpdate}
                />
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
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

UpdateSurveyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  survey: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    deadline: PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string
    }),
  }).isRequired,
};

export default UpdateSurveyModal;
