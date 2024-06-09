import Banner from "./SECTIONS/Banner";
import Faq from "./SECTIONS/Faq";
import HowItWorks from "./SECTIONS/HowItWorks";
import LatestSurveys from "./SECTIONS/LatestSurveys";
import PopularSurveys from "./SECTIONS/PopularSurveys";
const Home = () => {
  return (
    <div>
      <Banner />
      <PopularSurveys />
      <LatestSurveys />
      <HowItWorks />
      <Faq />
    </div>
  );
};

export default Home;
