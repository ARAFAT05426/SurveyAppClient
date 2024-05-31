import PropTypes from 'prop-types';
import "./Btn.css";

const PrimaryBtn = ({ text, type, onClick , className}) => {
  return (
    <button className={`w-full prime ${className ? className : "text-base xl:text-xl"}`} type={type} onClick={onClick}>
      <span className="primary">{text}</span>
    </button>
  );
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default PrimaryBtn;
