import PropTypes from "prop-types";

const TextInp = ({ title, name, register, className }) => (
  <div className="flex flex-col space-y-1">
    {title && (
      <label className="pl-1 font-bold text-lg lg:text-lg">{title}</label>
    )}
    <input
      id={name}
      name={name}
      type="text"
      placeholder={`Enter ${name.toLowerCase()}`}
      className={`${
        className ? className : "px-5 py-3"
      } font-semibold w-full border focus-within:outline-none`}
      {...register(name, { required: `${name} is required` })}
    />
  </div>
);

TextInp.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TextInp;
