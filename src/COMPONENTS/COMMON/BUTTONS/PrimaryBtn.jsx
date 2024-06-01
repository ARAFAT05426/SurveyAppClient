import PropTypes from "prop-types";
import "./Btn.css";
import { ImSpinner9 } from "react-icons/im";
const PrimaryBtn = ({ text, type, onClick, className, loading }) => {
  return (
    <button
      className={`w-full prime ${
        className ? className : "text-base xl:text-xl"
      }`}
      type={type}
      disabled={loading}
      onClick={onClick}
    >
      <span className="primary">{loading ? <ImSpinner9 size={25} className="animate-spin m-auto"/> :text}</span>
    </button>
  );
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default PrimaryBtn;
