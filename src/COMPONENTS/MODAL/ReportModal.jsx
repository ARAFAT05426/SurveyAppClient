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
import { ImSpinner9 } from "react-icons/im";
import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../../HOOKS/useAxiosCommon";
import useAuth from "../../HOOKS/useAuth";
import toast, { Toaster } from "react-hot-toast";

const ReportModal = ({ isOpen, setIsModalOpen, id }) => {
  const axiosCommon = useAxiosCommon();
  const {user} = useAuth()
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async (report) => {
      const { data } = await axiosCommon.patch(`/survey/report/${id}`, 
        report,
      );
      return data;
    },
    onSuccess: () => {
      setIsModalOpen(false);
    },
  });

  const handleReport = async (e) => {
    e.preventDefault();
    const report = {
      report: e.target.feedback.value,
      user: user?.email,
      time: Date.now()
    };

    if(!user){
      return toast.error("Kindly login to report")
    }
    try {
      setLoading(true);
      await mutateAsync(report);
      toast.success("Report submitted successfully!");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      e.target.reset();
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Toaster />
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
                    className="text-lg font-semibold text-center leading-6 text-gray-900"
                  >
                    Report
                  </DialogTitle>
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    Please provide your feedback below:
                  </p>
                  <div>
                    <form onSubmit={handleReport} className="space-y-3">
                      <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary/75"
                        name="feedback"
                        placeholder="Enter your feedback here..."
                        rows="4"
                        required
                      ></textarea>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className={`px-5 py-3 rounded bg-primary/85 text-white`}
                        >
                          {loading ? (
                            <ImSpinner9
                              size={25}
                              className="animate-spin m-auto"
                            />
                          ) : (
                            "Submit"
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
    </Fragment>
  );
};

ReportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  id: PropTypes.any,
};

export default ReportModal;
