import PropTypes from "prop-types";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import TextAreaInp from "../FunctionalInputFields/TextAreaInp";
import SelectInp from "../FunctionalInputFields/SelectInp";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../HOOKS/useAxiosSecure";
import useToast from "../../HOOKS/useToast";
import { ImSpinner9 } from "react-icons/im";

const UnpublishModal = ({ isOpen, setIsModalOpen, survey, refetch }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { showToast } = useToast();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data,e) => {
    const surveyData = {
        status: data.status,
        feedback: data.feedback
    };
    try {
      setLoading(true);
      await axiosSecure.put(`/survey/${survey?._id}`, surveyData);
      await refetch();
      e.target.reset();
      showToast("Survey updated successfully!", "success", "green");
      setIsModalOpen(false);
    } catch (err) {
        console.log(err);
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
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all space-y-5 z-50">
                <div className="flex justify-end">
                  <RiCloseCircleLine
                    className="cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                    size={35}
                  />
                </div>
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Unpublish Survey
                </DialogTitle>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Are you sure you want to unpublish this item?
                </p>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <SelectInp
                      title={`Status`}
                      name="status"
                      options={["publish", "unpublish"]}
                      register={register}
                    />
                    <TextAreaInp
                      title={`Feedback`}
                      name="feedback"
                      register={register}
                    />
                    <div className="flex justify-center">
                      <button
                        className={`px-5 py-3 rounded ${
                          survey && survey.status === "publish"
                            ? "bg-green-500 text-black"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {loading ? (
                          <ImSpinner9
                            size={25}
                            className="animate-spin m-auto"
                          />
                        ) : survey && survey.status === "publish" ? (
                          "Publish"
                        ) : (
                          "Unpublish"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UnpublishModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  survey: PropTypes.object,
  refetch: PropTypes.func,
};

export default UnpublishModal;
