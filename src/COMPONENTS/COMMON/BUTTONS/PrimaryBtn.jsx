import PropTypes from 'prop-types';
import "./Btn.css";

const PrimaryBtn = ({ text, type, onClick }) => {
  return (
    <button className='w-full prime' type={type} onClick={onClick}>
      <span className="primary">{text}</span>
    </button>
  );
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default PrimaryBtn;
