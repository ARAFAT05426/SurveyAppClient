import { useForm } from "react-hook-form";
import TextInp from "../../COMPONENTS/FunctionalInputFields/TextInp";
import SecondaryBtn from "../../COMPONENTS/COMMON/BUTTONS/SecondaryBtn";
import useAuth from "../../HOOKS/useAuth";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";
import useRole from "../../HOOKS/useRole";
import Loader from "../../COMPONENTS/LOADER/Loader";
import useAxiosSecure from "../../HOOKS/useAxiosSecure";

const SurveyComments = ({ comments, surveyId, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {role, isLoading} = useRole()
  const onSubmit = async (data) => {
    if (role !== "prouser") {
      return toast.error("Only Pro-Users can comment")
    } else if(!user){
      toast.error("Kindly login before comment")
    }
    try {
      const comment = {
        user: user.email,
        image: user?.photoURL,
        text: data.comment,
        timestamp: Date.now(),
      };
      await axiosSecure.patch(`/survey/comment/${surveyId}`, comment);
      refetch();
      toast.success("Comment posted successfully");
      reset();
    } catch (error) {
      console.error("Error posting comment:", error);
      toast.error("Error posting comment. Please try again.");
    }
  };
  if(isLoading){
    return <Loader />
  }
  return (
    <div className="px-10 py-6 mt-6 bg-white rounded-lg shadow-md space-y-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Comments</h2>
      <div className="space-y-3">
        {comments?.map((comment, index) => (
          <div key={index} className="flex items-start space-x-4 rounded border p-3">
            <img
              src={comment.image}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex flex-col justify-center-center">
                <h1 className="text-sm font-bold">{comment?.user}</h1>
                <span className="text-[10px]">
                  {formatDistanceToNow(new Date(comment?.timestamp))}ago
                </span>
              </div>
              <hr className="mt-2"/>
              <div className="rounded-md p-1">
                <p className="text-gray-800">{comment.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <form className="flex gap-x-[1px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <TextInp className={"py-4 px-5"} name="comment" register={register} />
          </div>
          <div className="w-fit">
          <SecondaryBtn text="Post" type="submit" />

          </div>
        </form>
      </div>
    </div>
  );
};

SurveyComments.propTypes = {
  comments: PropTypes.array.isRequired,
  surveyId: PropTypes.string.isRequired,
  refetch: PropTypes.func,
};

export default SurveyComments;
