import { useState } from "react";
import Heading from "../../../COMPONENTS/SECTIONS/Heading";
import AddSurveyForm from "./AddSurveyForm";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import useToast from "../../../HOOKS/useToast";
import useAuth from "../../../HOOKS/useAuth";

const AddSurvey = () => {
  const axiosSecure = useAxiosSecure();
  const { showToast } = useToast();

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [loading, setLoading] = useState(false);

  const handleDates = (item) => {
    setDates(item.selection);
  };

  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const handleAddSurvey = async (data, e) => {
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    // Map through the question keys and filter out those starting with 'question'
    const questions = Object.keys(data)
      .filter((key) => key.startsWith("question"))
      .map((key, index) => ({
        question: data[key], // Get the question value
        options: [
          {
            option: `${data[`option${index}`]}`,
            votecount: 0,
          },
          {
            option: `${data[`option${index}`]}`,
            votecount: 0,
          },
        ],
      }));
    const surveyData = {
      surveyId: "unique_survey_id", // Add a unique survey ID
      title: data.title,
      description: data.description,
      category: data.category,
      questions: [...questions],
      deadline: { from: dates.startDate, to: dates.endDate },
      status: "publish",
      timestamp: Date.now(),
      reaction: ["like", "dislike"],
      feedback: "",
      host,
    };
    try {
      setLoading(true);
      await axiosSecure.post(`/survey`, surveyData);
      showToast("Survey added successfully!", "success", "green");
      e.target.reset();
    } catch (err) {
      showToast("Failed to add survey. Please try again.", "error", "red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-10 py-7 border mt-20 lg:mt-5 w-max mx-auto rounded-md">
      <Heading
        title="Create New Survey"
        subtitle="Empowering Informed Decisions: Gathering Community Insights for Smart Choices"
      />
      <AddSurveyForm
        handleSubmit={handleSubmit}
        handleAddSurvey={handleAddSurvey}
        dates={dates}
        handleDates={handleDates}
        register={register}
        loading={loading}
      />
    </section>
  );
};

export default AddSurvey;
