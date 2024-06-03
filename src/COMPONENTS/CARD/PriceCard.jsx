import PropTypes from "prop-types";
import { BsCheck } from "react-icons/bs";
import SecondaryBtn from "../COMMON/BUTTONS/SecondaryBtn";
import SubscriptionModal from "../MODAL/Subscription/SubscriptionModal";
import { useState } from "react";
import useRole from "../../HOOKS/useRole";

const PriceCard = ({ plan, price, features, best }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(true);
  };
  const { role } = useRole();
  console.log(role);
  return (
    <div
      className={`${
        best && "-translate-y-5 scale-105"
      } bg-white/35 backdrop-blur-3xl flex flex-col items-center rounded-lg shadow-md w-max h-card pb-10`}
    >
      <h2 className="text-2xl font-bold mb-4 p-3 text-center uppercase w-full bg-primary/90 rounded-t-lg">
        {plan}
      </h2>
      <p className=" text-center text-4xl font-thinHeading font-extrabold text-primary mb-4">
        <sup>$</sup>
        {price}
      </p>
      <ul className="flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center font-semibold mb-2">
            <BsCheck className="text-secondary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      {plan.toLowerCase() === "user" ? (
        <SecondaryBtn text="Free" />
      ) : role === plan.toLowerCase() ? (
        <SecondaryBtn text="'-'Purchased'-'" />
      ) : (
        <SecondaryBtn text="Purchase" onClick={handleModal} />
      )}
      <SubscriptionModal
        isOpen={isOpen}
        closeModal={setIsOpen}
        role={plan}
        price={price}
      />
    </div>
  );
};

PriceCard.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.any,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  best: PropTypes.bool,
};

export default PriceCard;
