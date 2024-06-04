import PropTypes from 'prop-types';

const TextAreaInp = ({ title, name, register }) => (
  <div className="flex flex-col space-y-1">
    {title && (
      <label className="pl-1 font-bold text-lg lg:text-lg">
        {title}
      </label>
    )}
    <textarea
      id={name}
      name={name}
      placeholder={`Enter ${name.toLowerCase()}`}
      className="px-5 py-3 h-40 font-semibold w-full border focus-within:outline-none"
      {...register(name, { required: `${name} is required` })}
    ></textarea>
  </div>
);

TextAreaInp.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default TextAreaInp;
