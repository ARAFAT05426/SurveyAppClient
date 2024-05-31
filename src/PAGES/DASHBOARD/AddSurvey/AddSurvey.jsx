import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInp from "../../../COMPONENTS/FunctionalInputFields/TextInp";

const AddSurvey = () => {
    const [fields, setFields] = useState([{ question: '' }]);

    const addField = () => {
        setFields([...fields, { question: '' }]);
    };

    const handleQuestionChange = (index, event) => {
        const newFields = [...fields];
        newFields[index].question = event.target.value;
        setFields(newFields);
    };

    const removeField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="px-10 py-7 border mt-16 lg:mt-5 w-max mx-auto">
            <div className="flex flex-col items-center space-y-3">
                <h1 className="font-bold text-4xl">Create New <span className="text-primary">Survey</span></h1>
                <p className="font-thinHeading">Empowering Informed Decisions: Gathering Community Insights for Smart Choices</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <TextInp
                            title={`Question ${index + 1}`}
                            name={`question${index}`}
                            register={register}
                            onChange={(e) => handleQuestionChange(index, e)}
                        />
                        <button onClick={() => removeField(index)}>Remove Question</button>
                    </div>
                ))}
                <button onClick={addField}>Add Question</button>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default AddSurvey;
