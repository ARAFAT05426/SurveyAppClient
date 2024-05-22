import PropTypes from "prop-types";

const DummyTextArea = ({ title, notitle, row }) => {
  return (
    <div className="flex flex-col space-y-2">
      {!notitle && <h1 className="pl-1 font-semibold text-lg text-white">{title}</h1>}
      <textarea
        className={`px-4 py-2 w-full font-normal ${notitle ? 'border' : ''} focus:outline-none`}
        placeholder={`Enter your ${title.toLowerCase()}`}
        rows={row}
      />
    </div>
  );
};

DummyTextArea.propTypes = {
  title: PropTypes.string.isRequired,
  notitle: PropTypes.bool,
  row: PropTypes.number
};

export default DummyTextArea;
