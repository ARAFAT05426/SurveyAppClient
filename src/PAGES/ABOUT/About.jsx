const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-indigo-600 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-10 lg:p-20 xl:p-30 mb-16">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 text-center text-gray-800">
          Our Story
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-16 leading-relaxed">
          We are a passionate team dedicated to crafting memorable experiences. From design to delivery, our focus is on creating meaningful connections and lasting impressions.
        </p>
        <div className="flex justify-center space-x-8">
          <a href="#" className="transition duration-300 ease-in-out transform hover:scale-110">
            <img
              className="w-12 lg:w-16 h-12 lg:h-16"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="Facebook"
            />
          </a>
          <a href="#" className="transition duration-300 ease-in-out transform hover:scale-110">
            <img
              className="w-12 lg:w-16 h-12 lg:h-16"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png"
              alt="Twitter"
            />
          </a>
          <a href="#" className="transition duration-300 ease-in-out transform hover:scale-110">
            <img
              className="w-12 lg:w-16 h-12 lg:h-16"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt="Instagram"
            />
          </a>
          <a href="#" className="transition duration-300 ease-in-out transform hover:scale-110">
            <img
              className="w-12 lg:w-16 h-12 lg:h-16"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl p-10 lg:p-20 xl:p-30">
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 text-center text-gray-800">
          Our Mission
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mb-16 leading-relaxed">
          Our mission is to empower individuals and businesses to thrive through innovative solutions and exceptional service. We strive to make a positive impact on our community and the world.
        </p>
        <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default About;
