import SecondaryBtn from "../../../COMPONENTS/COMMON/BUTTONS/SecondaryBtn";

const Banner = () => {
  const backgroundImage = "/hero_bg.png";

  return (
    <section
      className="h-navMinus pt-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col xl:flex-row items-center justify-between px-5 md:px-12 lg:px-32">
        <div className="w-full lg:w-1/2 flex items-start flex-col justify-center text-white space-y-5">
          <h2 className="font-thinHeading text-lg font-light tracking-[.25em]">
            Welcome to KwikPolls
          </h2>
          <p className="max-w-3xl text-3xl lg:text-4xl font-semibold">
            Simplify surveys with <span className="text-primary">KwikPolls</span>! Our fullstack app streamlines data collection and offers insightful analytics for market research, feedback, and polls.
          </p>
          <SecondaryBtn text={"Explore"} />
        </div>
        <div className="w-full lg:w-1/2">
          <img className="object-cover w-full" src="/survey.gif" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
