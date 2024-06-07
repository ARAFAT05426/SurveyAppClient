import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import PrimaryBtn from "../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
import useAxiosCommon from "../../HOOKS/useAxiosCommon";
import { toast } from "react-hot-toast";
import useAuth from "../../HOOKS/useAuth";
import Heading from "../../COMPONENTS/SECTIONS/Heading";

const Surveynow = ({ survey }) => {
  const { register, handleSubmit } = useForm();
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Heading title={`${survey.title}`} subtitle={`${survey.description}`} />
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {survey?.questions.map((question, questionIndex) => (
          <div key={questionIndex} className="my-10">
            <h2 className="text-xl text-center font-semibold text-gray-800">
              {question.question}
            </h2>
            <div className="flex items-center justify-between max-w-xs mx-auto mt-4">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="option">
                  <input
                    type="radio"
                    name={`question${questionIndex}`}
                    value={option.option}
                    {...register(`question${questionIndex}`)}
                    className="mr-2"
                  />
                  <span className="text">{option.option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <PrimaryBtn text="Vote" type="submit" />
        </div>
      </form>
    </div>
  );
};

Surveynow.propTypes = {
  survey: PropTypes.object.isRequired,
};

export default Surveynow;
