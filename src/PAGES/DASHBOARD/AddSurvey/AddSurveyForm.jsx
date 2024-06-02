import PropTypes from "prop-types";
import TextInp from "../../../COMPONENTS/FunctionalInputFields/TextInp";
import TextAreaInp from "../../../COMPONENTS/FunctionalInputFields/TextAreaInp";
import { DateRange } from "react-date-range";
import SelectInp from "../../../COMPONENTS/FunctionalInputFields/SelectInp";
import PrimaryBtn from "../../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
import { surveyCategories } from "../../../COMPONENTS/surveyCategories";
const AddSurveyForm = ({
  dates,
  handleDates,
  register,
  handleAddSurvey,
  handleSubmit,
  loading,
}) => {
  return (
    <form
      onSubmit={handleSubmit(handleAddSurvey)}
      className="space-y-4 flex flex-col gap-5"
    >
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 space-y-3 p-1 lg:p-4">
          <TextInp title={"Title"} name="title" register={register} />
          <TextAreaInp
            title={"Description"}
            name="description"
            register={register}
          />
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <TextInp title={"Option1"} name="option1" register={register} />
            </div>
            <div className="flex-1">
              <TextInp title={"Option2"} name="option2" register={register} />
            </div>
          </div>
          <div className="flex-1">
            <SelectInp
              title={"Category"}
              name="category"
              register={register}
              options={surveyCategories}
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-auto">
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
