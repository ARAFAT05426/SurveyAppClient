import PropTypes from 'prop-types';
import "./Btn.css"

const SecondaryBtn = ({ text, onClick }) => {
  return (
    <button className='secondary font-thinHeading' onClick={onClick}>
      <span className=''>{text}</span>
    </button>
  );
};

SecondaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default SecondaryBtn;
