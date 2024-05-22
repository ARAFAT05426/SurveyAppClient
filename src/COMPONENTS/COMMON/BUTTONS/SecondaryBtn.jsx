import PropTypes from 'prop-types';
import "./Btn.css"

const SecondaryBtn = ({ text, onClick }) => {
  return (
    <button className='secondary' onClick={onClick}>
      <span className=''>{text}</span>
    </button>
  );
};

SecondaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SecondaryBtn;
