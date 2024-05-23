import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInp = ({ title, register, errors }) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      {title && (
        <label
          htmlFor="password"
          className="pl-1 font-bold text-lg"
        >
          {title}
        </label>
      )}
      <div className="flex items-center border bg-slate-50">
        <input
          id="password"
          className="px-4 py-2 w-full font-normal outline-none"
          placeholder="Enter your password"
          type={hide ? "text" : "password"}
          {...register("password", { required: "Password is required" })}
          aria-invalid={errors?.password ? "true" : "false"}
        />
        <span
          onClick={() => setHide(!hide)}
          className="px-4 py-2 cursor-pointer"
          aria-label={hide ? "Hide password" : "Show password"}
        >
          {hide ? (
            <AiOutlineEyeInvisible className="text-2xl" />
          ) : (
            <AiOutlineEye className="text-2xl" />
          )}
        </span>
      </div>
      {errors?.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>
  );
};

PasswordInp.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default PasswordInp;
