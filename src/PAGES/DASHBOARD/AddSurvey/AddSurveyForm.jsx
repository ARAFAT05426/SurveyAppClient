import PropTypes from "prop-types";
import TextInp from "../../../COMPONENTS/FunctionalInputFields/TextInp";
import TextAreaInp from "../../../COMPONENTS/FunctionalInputFields/TextAreaInp";
import { DateRange } from "react-date-range";
import SelectInp from "../../../COMPONENTS/FunctionalInputFields/SelectInp";
import PrimaryBtn from "../../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";

const surveyCategories = [
  "Customer Satisfaction",
  "Employee Engagement",
  "Market Research",
  "Product Feedback",
  "Event Feedback",
  "Health and Wellness",
  "Education and Training",
  "Community and Public Opinion",
  "Website Usability",
  "User Experience",
  "Brand Awareness",
  "Advertising Effectiveness",
  "Customer Service Evaluation",
  "Social Media Usage",
  "Political Opinion",
  "Environmental Concerns",
  "Travel Preferences",
  "Food Preferences",
  "Entertainment Preferences",
  "Financial Habits",
  "Technology Usage",
  "Mobile App Feedback",
  "Gaming Habits",
  "Fashion Trends",
];

const AddSurveyForm = ({ dates, handleDates, register, handleAddSurvey, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(handleAddSurvey)} className="space-y-5 flex flex-col gap-5">
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 space-y-5 p-1 lg:p-4">
          <TextInp title={"Title"} name="title" register={register} />
          <TextAreaInp
            title={"Description"}
            name="description"
            register={register}
          />
          <div className="flex gap-3">
            <div className="flex-1">
              <SelectInp
                title={"Category"}
                name="category"
                register={register}
                options={surveyCategories}
              />
            </div>
            <div className="flex-1">
              <SelectInp
                title={"Options"}
                name="option"
                register={register}
                options={["yes", "no"]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit">
          <label className="text-lg font-bold">Deadline</label>
          <div className="p-1 w-fit mx-auto border rounded shadow">
            <DateRange
              rangeColors={['#04ee04']}
              editableDateInputs={true}
              onChange={item => handleDates(item)}
              moveRangeOnFirstSelection={false}
              ranges={[dates]}
            />
          </div>
        </div>
      </div>
      <PrimaryBtn text="Add Survey" type={"submit"} />
    </form>
  );
};

AddSurveyForm.propTypes = {
  dates: PropTypes.object.isRequired,
  handleDates: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  handleAddSurvey: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddSurveyForm;