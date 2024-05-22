import PropTypes from "prop-types";

const DummyInp = ({ title, notitle }) => {
  return (
    <div className="flex flex-col space-y-2">
      {notitle ? (
        ""
      ) : (
        <h1 className="pl-1 font-semibold text-lg text-white">{title}</h1>
      )}
      <input
        className={`px-4 py-2 w-full font-normal ${notitle ? 'border' : ''} focus-within:outline-none`}
        placeholder={`Enter your ${title.toLowerCase()}`}
        type="text"
      />
    </div>
  );
};

DummyInp.propTypes = {
  title: PropTypes.string.isRequired,
  notitle: PropTypes.bool,
};

export default DummyInp;
