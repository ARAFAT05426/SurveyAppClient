import PropTypes from 'prop-types';

const SelectInp = ({ name, title, options, register, required = false }) => {
  return (
    <div className="flex flex-col space-y-1">
      {title && (
        <label className="pl-1 font-bold text-lg lg:text-lg">
          {title}
        </label>
      )}
      <select
        id={name}
        name={name}
        className="px-5 py-3 font-semibold w-full border focus-within:outline-none"
        {...register(name, { required: required ? `${name} is required` : false })}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInp.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default SelectInp;
