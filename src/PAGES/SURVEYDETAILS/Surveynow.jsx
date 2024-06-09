import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import PrimaryBtn from "../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
import useAxiosCommon from "../../HOOKS/useAxiosCommon";
import { toast } from "react-hot-toast";
import useAuth from "../../HOOKS/useAuth";
import Heading from "../../COMPONENTS/SECTIONS/Heading";
import { MdOutlineReport } from "react-icons/md";
import ReportModal from "../../COMPONENTS/MODAL/ReportModal";
import { useState } from "react";
const Surveynow = ({ survey }) => {
  const { register, handleSubmit } = useForm();
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = async (data, e) => {
    if (!user) {
      return toast.error("Please login to vote");
    } else if (survey.voters.some((voter) => voter.email === user?.email)) {
      return toast.error("You have already voted once");
    }

    try {
      const payload = {
        voter: user?.displayName,
        voterEmail: user?.email,
        questions: survey.questions.map((question, questionIndex) => ({
          question: question.question,
          selectedOption: data[`question${questionIndex}`],
        })),
      };
      await axiosCommon.patch(`/survey/vote/${survey._id}`, payload);
      toast.success("Vote submitted successfully");
      e.target.reset();
    } catch (error) {
      console.error("Error updating survey:", error);
      toast.error("Error submitting vote. Please try again.");
    }
  };
  return (
    <div className="p-8 bg-white rounded-lg shadow-xl">
      <div className="flex justify-end">
        <MdOutlineReport className="cursor-pointer" size={50} onClick={() => setIsOpen(true)} />
        <ReportModal isOpen={isOpen} setIsModalOpen={setIsOpen} id={survey._id} />
      </div>
      <Heading title={survey.title} subtitle={survey.description} />
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {survey?.questions.map((question, questionIndex) => (
          <div
            key={questionIndex}
            className="my-10 bg-gray-100 p-6 rounded-lg shadow-inner"
          >
            <h2 className="text-2xl text-center font-semibold text-primary/80 mb-4">
              {question.question}
            </h2>
            <div className="flex flex-col items-center space-y-3">
              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="radio"
                    name={`question${questionIndex}`}
                    value={option.option}
                    {...register(`question${questionIndex}`)}
                    className="hidden"
                  />
                  <span className="custom-radio flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 transition duration-300 ease-in-out transform hover:scale-110">
                    <span className="radio-dot hidden w-3 h-3 bg-primary rounded-full transition duration-300 ease-in-out"></span>
                  </span>
                  <span className="text-gray-700">{option.option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <PrimaryBtn text="Vote" type="submit" />
        </div>
      </form>
      <style>{`
        .custom-radio:hover .radio-dot {
          display: block;
        }
        input:checked + .custom-radio .radio-dot {
          display: block;
        }
      `}</style>
    </div>
  );
};

Surveynow.propTypes = {
  survey: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            option: PropTypes.string.isRequired,
            votecount: PropTypes.number.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
    voters: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Surveynow;
