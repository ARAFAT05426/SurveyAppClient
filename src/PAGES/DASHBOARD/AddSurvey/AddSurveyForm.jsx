import PropTypes from "prop-types";
import TextInp from "../../../COMPONENTS/FunctionalInputFields/TextInp";
import { DateRange } from "react-date-range";
import SelectInp from "../../../COMPONENTS/FunctionalInputFields/SelectInp";
import PrimaryBtn from "../../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
import { surveyCategories } from "../../../COMPONENTS/surveyCategories";
import { useState } from "react";
import TextAreaInp from "../../../COMPONENTS/FunctionalInputFields/TextAreaInp";

const AddSurveyForm = ({
  dates,
  handleDates,
  register,
  handleAddSurvey,
  handleSubmit,
  loading,
}) => {
  const [questions, setQuestions] = useState([
    { question: "", option1: "", option2: "" },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", option1: "", option2: "" }]);
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddSurvey)}
      className="space-y-4 flex flex-col"
    >
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="flex-1 space-y-4">
          <TextInp title={"Title"} name="title" register={register} />
          <TextAreaInp
            title={"Description"}
            name="description"
            register={register}
          />
          <SelectInp
            title={"Category"}
            name="category"
            register={register}
            options={surveyCategories}
          />
        </div>
        <div>
          <label className="text-lg font-bold">Deadline</label>
          <div className="p-2 w-full lg:w-fit mx-auto border rounded shadow">
            <DateRange
              rangeColors={["#04ee04"]}
              editableDateInputs={true}
              onChange={(item) => handleDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={[dates]}
            />
          </div>
        </div>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="flex-1 space-y-3 p-1s">
          <TextInp
            title={`Question${index + 1}`}
            name={`question${index+1}`}
            register={register}
          />
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <TextInp
                title={`Option 1`}
                name={`option${index+1}`}
                register={register}
              />
            </div>
            <div className="flex-1">
              <TextInp
                title={`Option ${index+2}`}
                name={`option${index}`}
                register={register}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addQuestion}
        className="bg-primary/70 hover:bg-primary/80 text-white font-bold py-2 px-4 rounded w-fit mx-auto"
      >
        Add Question
      </button>
      <PrimaryBtn text="Add Survey" type={"submit"} loading={loading} />
    </form>
  );
};

AddSurveyForm.propTypes = {
  dates: PropTypes.object.isRequired,
  handleDates: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  handleAddSurvey: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default AddSurveyForm;
