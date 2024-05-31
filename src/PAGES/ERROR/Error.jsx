import { TbError404 } from "react-icons/tb";
import PrimaryBtn from "../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
import { Link, useNavigate } from "react-router-dom";
import SecondaryBtn from "../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
const Error = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <TbError404 className="text-9xl animate-bounce" />
        <div className="flex items-center gap-5">
          <SecondaryBtn text="Go Back" onClick={handleBack} />
          <Link to={"/"}>
            <PrimaryBtn text="HomePage" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
