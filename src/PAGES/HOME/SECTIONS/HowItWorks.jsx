import Heading from "../../../COMPONENTS/SECTIONS/Heading";
import { MdOutlineVerified } from "react-icons/md";
import { PiFlowArrowLight } from "react-icons/pi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbFileLike } from "react-icons/tb";
const HowItWorks = () => {
  return (
    <section className="space-y-5">
      <Heading
        title="See How It Works In 3 Simple Steps"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <div className="px-5 lg:px-32 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center gap-3 items-center w-fit">
            <div
              className="p-5 rounded-full text-white"
              style={{
                background: "linear-gradient(90deg, #a8e063, #56ab2f)", // Green gradient
              }}
            >
              <MdOutlineVerified size={150} />
            </div>
            <h1 className="text-2xl font-bold">Sign Up For Free</h1>
            <p className="text-center max-w-xs">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <PiFlowArrowLight className="text-[#60B236] rotate-90 md:rotate-0 mb-10" size={170} />
          <div className="flex flex-col justify-center gap-3 items-center w-fit">
            <div
              className="p-5 rounded-full text-white"
              style={{
                background: "linear-gradient(90deg, #a8e063, #56ab2f)", // Green gradient
              }}
            >
              <HiOutlineEmojiHappy size={150} />
            </div>
            <h1 className="text-2xl font-bold">Participate In Surveys</h1>
            <p className="text-center max-w-xs">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <PiFlowArrowLight className="text-[#60B236] rotate-90 md:rotate-0 mb-10" size={170} />
          <div className="flex flex-col justify-center gap-3 items-center w-fit">
            <div
              className="p-5 rounded-full text-white"
              style={{
                background: "linear-gradient(90deg, #a8e063, #56ab2f)", // Green gradient
              }}
            >
              <TbFileLike size={150} />
            </div>
            <h1 className="text-2xl font-bold">Earn Experiences</h1>
            <p className="text-center max-w-xs">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
