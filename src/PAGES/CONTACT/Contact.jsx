import { useState } from "react";
import backgroundImage from "/contact.png";
import { CiLocationOn } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import DummyInp from "../../COMPONENTS/DummyInputFields/DummyInp";
import DummyTextArea from "../../COMPONENTS/DummyInputFields/DummyTextArea";
const Contact = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <section className="">
      {/* Background Image */}
      <div
        className="h-half bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="px-10 py-5 w-1/2 mx-auto bg-black/55 rounded text-center text-white space-y-3">
          <h1 className="text-6xl font-thinHeading font-thin">CONTACT</h1>
          <p>WE’RE ALWAYS OPEN TO TALK WITH YOU</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row -mt-28 lg:-mt-36 pb-20 mx-5 lg:mx-32 bg-white/25 backdrop-blur-3xl">
        <div className={`w-full lg:w-1/2 relative overflow-hidden shadow-md`}>
          {/* Overlay */}
          {overlayVisible && (
            <div
              className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center cursor-pointer"
              onClick={toggleOverlay}
            >
              <CiLocationOn className="w-12 h-12 text-white animate-bounce" />
            </div>
          )}
          {/* Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.6474244661326!2d90.23286271219295!3d22.13983366648592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa93f929dc6249%3A0x3eeb9068722ee9b!2sAmtali%20Police%20Station%2C%20College%20Rd%2C%20Amtali!5e0!3m2!1sen!2sbd!4v1716348446535!5m2!1sen!2sbd"
            style={{ width: "100%", height: "60vh" }}
            className="focus-within:outline-none-none border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="px-5 py-16 w-full lg:w-1/2 space-y-16">
          <img className="w-28 mx-auto" src="/logo.png" alt="" />
          <div className="mt-10 w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row gap-3 items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-sm bg-black/75 rotate-45">
                <BiPhoneCall className="text-2xl text-white -rotate-45" />
              </button>
              <div className="flex flex-col">
                <span className="text-xs font-medium font-thinHeading">
                  CALL US
                </span>
                <p className="text-sm font-semibold">+61 3 8376 6284</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-sm bg-black/75 rotate-45">
                <TfiEmail className="text-2xl text-white -rotate-45" />
              </button>
              <div className="flex flex-col">
                <span className="text-xs font-medium font-thinHeading">
                  EMAIL
                </span>
                <p className="text-sm font-semibold">arafat05426@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-sm bg-black/75 rotate-45">
                <MdLocationPin className="text-2xl text-white -rotate-45" />
              </button>
              <div className="flex flex-col">
                <span className="text-xs font-medium font-thinHeading">
                  ADDRESS
                </span>
                <p className="text-sm font-semibold">College Rd, Amtali</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <DummyInp title="Name" notitle={true} />
            <DummyInp title="Email" notitle={true} />
            <div className="col-span-2">
              <DummyTextArea title="Subject" notitle={true} row={8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
