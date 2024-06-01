import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';
import SecondaryBtn from '../COMMON/BUTTONS/SecondaryBtn';

const PriceCard = ({ plan, price, features, best }) => {
    return (
        <div className={`${best && "-translate-y-5 scale-105"} bg-white/35 backdrop-blur-3xl flex flex-col items-center rounded-lg shadow-md w-max h-card pb-10`}>
            <h2 className="text-2xl font-bold mb-4 p-3 text-center uppercase w-full bg-primary/90 rounded-t-lg">{plan}</h2>
            <p className=" text-center text-4xl font-thinHeading font-extrabold text-primary mb-4"><sup>$</sup>{price}</p>
            <ul className="flex-1">
                {features.map((feature, index) => (
                    <li key={index} className="grid grid-cols-2 items-center font-semibold mb-2">
                        <BsCheck className="text-secondary mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
            <SecondaryBtn text='Purchase' />
        </div>
    );
};

PriceCard.propTypes = {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    best: PropTypes.bool
};

export default PriceCard;
