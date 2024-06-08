import PropTypes from "prop-types";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import UpdateSurveyForm from "./UpdateSurveyForm";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import useToast from "../../../HOOKS/useToast";
import { RiCloseCircleLine } from "react-icons/ri";

const UpdateSurveyModal = ({ isOpen, setIsModalOpen, survey, refetch }) => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [dates, setDates] = useState({
    startDate: new Date(survey.deadline?.from || new Date()),
    endDate: new Date(survey.deadline?.to || new Date()),
    key: "selection",
  });
  const handleDates = (item) => {
    setDates(item.selection);
  };
  const { showToast } = useToast();
  const { register, handleSubmit } = useForm();
  
  const handleUpdate = async (data, e) => {
    console.log(data);
    const surveyData = {
      title: data?.title,
      description: data?.description,
      questions: data?.questions?.map((q) => ({
        question: q.question,
        options: q.options.map((option) => ({
          option: option,
        })),
      })),
      deadline: { from: dates.startDate, to: dates.endDate },
      status: "publish",
      timestamp: Date.now(),
      reaction: ["like", "dislike"],
      feedback: "",
    };
    console.log(surveyData);
    try {
      setLoading(true);
      await axiosSecure.put(`/survey/${survey._id}`, surveyData);
      await refetch();
      e.target.reset();
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
                  <RiCloseCircleLine className="cursor-pointer" onClick={() =>setIsModalOpen(false)} size={35} />
                </div>
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Survey Info
                </DialogTitle>
                <UpdateSurveyForm
                  register={register}
                  dates={dates}
                  loading={loading}
                  handleDates={handleDates}
                  handleSubmit={handleSubmit}
                  handleUpdate={handleUpdate}
                  questions={survey?.questions}
                />
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
  survey: PropTypes.object.isRequired,
  refetch: PropTypes.func,
};

export default UpdateSurveyModal;
