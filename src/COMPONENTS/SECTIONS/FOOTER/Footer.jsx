import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black/10 rounded text-base-content">
      <div className="p-4 flex flex-col lg:flex-row justify-around items-center sm:p-12">
        {/* '-' Left_Area '-' */}
        <div className="text-center">
          <h1 className="text-2xl">
            <img className="w-48 mx-auto" src="/logo.png" alt="" />
          </h1>
          <p className="text-sm font-semibold">Survey Application</p>
        </div>
        {/* '-' Divider '-' */}
        <div className="w-full h-[2px ] my-4 bg-primary/50 rounded lg:w-1 lg:h-28"></div>
        {/* '-' Right_Area '-' */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center py-1">
            <FaEnvelope size={40} className="p-3 text-xl" />
            <span>arafat05426@gmail.com</span>
          </div>
          <div className="flex items-center py-1">
            <FaPhoneAlt size={40} className="p-3 text-xl" />
            <span>+123-456-7890</span>
          </div>
          <div className="flex items-center py-1">
            <FaMapMarkerAlt size={40} className="p-3 text-xl" />
            <span>Austin, Texas</span>
          </div>
        </div>
      </div>
      {/* '-' Bottom_Area '-' */}
      <div className="bg-black/15 ">
        <div className="p-3 text-sm flex items-center justify-center max-w-lg mx-auto gap-3">
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-primary/75 hover:text-white"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-primary/75 hover:text-white"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-primary/75 hover:text-white"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-primary/75 hover:text-white"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
