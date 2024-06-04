import PropTypes from "prop-types";
import { DateRange } from "react-date-range";
import SelectInp from "../../FunctionalInputFields/SelectInp";
import TextAreaInp from "../../FunctionalInputFields/TextAreaInp";
import TextInp from "../../FunctionalInputFields/TextInp";
import { surveyCategories } from "../../surveyCategories";
import PrimaryBtn from "../../COMMON/BUTTONS/PrimaryBtn";

const UpdateSurveyForm = ({
  dates,
  loading,
  questions,
  register,
  handleSubmit,
  handleUpdate,
  handleDates,
}) => {
  return (
    <form
      className="space-y-5 h-half overflow-y-auto"
      onSubmit={handleSubmit(handleUpdate)}
    >
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
      {questions?.map((q, qi) => (
        <div key={qi}>
          <TextInp
            title={`Question ${qi + 1}`}
            name={`questions[${qi}].question`}
            register={register}
            defaultValue={q.question}
          />
          {q.options?.map((option, oi) => (
            <TextInp
              key={oi}
              title={`Option ${oi + 1}`}
              name={`questions[${qi}].options[${oi}]`}
              register={register}
              defaultValue={option}
            />
          ))}
        </div>
      ))}
      <div className="p-1 w-full lg:w-fit mx-auto border rounded shadow">
        <DateRange
          rangeColors={["#04ee04"]}
          editableDateInputs={true}
          onChange={(item) => handleDates(item)}
          moveRangeOnFirstSelection={false}
          ranges={[dates]}
        />
      </div>
      <h1 className="mx-5">
        <PrimaryBtn text="Update Survey" type={"submit"} loading={loading} />
      </h1>
    </form>
  );
};

UpdateSurveyForm.propTypes = {
  dates: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDates: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

export default UpdateSurveyForm;
