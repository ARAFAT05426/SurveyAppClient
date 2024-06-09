import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Heading from "../../../COMPONENTS/SECTIONS/Heading";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <section className="py-10">
      <Heading title="FAQ" subtitle="GOT A QUESTION? WE’VE GOT ANSWERS." />
      <div className="flex flex-col lg:flex-row items-center justify-around px-5 lg:px-32">
        <div>
          <img className="w-full" src="/faq.png" alt="" />
        </div>
        <div className="space-y-5">
          {/* '-' Question-1 '-' */}
          <div className={`space-y-2 ${isOpen === 0 ? "border-l-[6px]" : "border-l-0"}  rounded-s-md px-3`}>
            <div
              onClick={() => setIsOpen(0)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
            >
              <h1>What is the purpose of this survey application?</h1>
              <FaAngleDown
                className={`${isOpen === 0 ? "rotate-180" : "rotate-0"} transition-all`}
              />
            </div>
            <div
              className={`max-w-3xl ${isOpen === 0 ? "h-24" : "h-0"} transition-all overflow-hidden`}
            >
              <hr />
              This survey application is designed to gather feedback and opinions from users on various topics. It allows you to create and distribute surveys, collect responses, and analyze the results to make informed decisions.
            </div>
          </div>
          {/* '-' Question-2 '-' */}
          <div className={`space-y-2 ${isOpen === 1 ? "border-l-[6px]" : "border-l-0"}  rounded-s-md px-3`}>
            <div
              onClick={() => setIsOpen(1)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
            >
              <h1>How can I create a survey?</h1>
              <FaAngleDown
                className={`${isOpen === 1 ? "rotate-180" : "rotate-0"} transition-all`}
              />
            </div>
            <div
              className={`max-w-3xl ${isOpen === 1 ? "h-24" : "h-0"} transition-all overflow-hidden`}
            >
              <hr />
              To create a survey, you can navigate to the "Create Survey" section of the application. There, you can specify the title, description, questions, and other details of your survey. Once created, you can share the survey link with your audience to collect responses.
            </div>
          </div>
          {/* '-' Question-3 '-' */}
          <div className={`space-y-2 ${isOpen === 2 ? "border-l-[6px]" : "border-l-0"}  rounded-s-md px-3`}>
            <div
              onClick={() => setIsOpen(2)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
            >
              <h1>How do I analyze survey responses?</h1>
              <FaAngleDown
                className={`${isOpen === 2 ? "rotate-180" : "rotate-0"} transition-all`}
              />
            </div>
            <div
              className={`max-w-3xl ${isOpen === 2 ? "h-24" : "h-0"} transition-all overflow-hidden`}
            >
              <hr />
              You can analyze survey responses by navigating to the "Survey Results" section of the application. There, you will find detailed insights and visualizations based on the collected responses. You can filter, sort, and export the data to further analyze it.
            </div>
          </div>
          {/* '-' Question-4 '-' */}
          <div className={`space-y-2 ${isOpen === 3 ? "border-l-[6px]" : "border-l-0"}  rounded-s-md px-3`}>
            <div
              onClick={() => setIsOpen(3)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
            >
              <h1>Is my data secure?</h1>
              <FaAngleDown
                className={`${isOpen === 3 ? "rotate-180" : "rotate-0"} transition-all`}
              />
            </div>
            <div
              className={`max-w-3xl ${isOpen === 3 ? "h-24" : "h-0"} transition-all overflow-hidden`}
            >
              <hr />
              Yes, we take data security seriously. We implement various security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. Your survey responses and personal information are encrypted and stored securely on our servers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
