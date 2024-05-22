import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black/5 rounded text-base-content">
      <div className="p-4 flex flex-col lg:flex-row justify-around items-center sm:p-12">
        {/* '-' Left_Area '-' */}
        <div className="text-center">
          <h1 className="text-2xl">
            <img className="w-28 mx-auto" src="/logo.png" alt="" />
          </h1>
          <p className="text-sm font-semibold">FrontEnd Devloper</p>
        </div>
        {/* '-' Divider '-' */}
        <div className="w-full h-[2px ] my-4 bg-black/50 rounded lg:w-1 lg:h-28"></div>
        {/* '-' Right_Area '-' */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center py-1">
            <span className="px-4">arafat05426@gmail.com</span>
          </div>
          <div className="flex items-center py-1">
            <span className="px-4">+123-456-7890</span>
          </div>
          <div className="flex items-center py-1">
            <span className="px-4">example.com</span>
          </div>
          <div className="flex items-center py-1">
            <span className="px-4">Austin, Texas</span>
          </div>
        </div>
      </div>
      {/* '-' Bottom_Area '-' */}
      <div className="bg-black/35 ">
        <div className="p-3 text-sm flex items-center justify-center max-w-lg mx-auto gap-3">
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black/75 hover:text-white"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black/75 hover:text-white"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black/75 hover:text-white"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="#_"
            className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black/75 hover:text-white"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
