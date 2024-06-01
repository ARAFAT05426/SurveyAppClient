import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../HOOKS/useAuth";
import useToast from "../../HOOKS/useToast";
import PasswordInp from "../../COMPONENTS/FunctionalInputFields/PasswordInp";
import TextInp from "../../COMPONENTS/FunctionalInputFields/TextInp";
import PrimaryBtn from "../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const img = "https://source.unsplash.com/featured/1080x720/?exotic";
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const { showToast } = useToast();
  const [pending, setPending] = useState(false)
  const onSubmit = async (data) => {
    const { name, email, url, password } = data;

    // Validate password strength
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return showToast(
        'Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long',
        'error',
        '#dc3545'
      );
    }

    try {
      // Create user account
      setPending(true)
      await createUser(email, password);

      // Update user profile
      await updateUserProfile(name, url);

      // Reset form and navigate
      navigate(location?.state || "/");
      showToast('Welcome to KraftFix! Your account has been created.', 'success', '#007bff');
    } catch (error) {
      console.error("Sign up error:", error);

      const errorMessage = error.message.includes('auth/invalid-credential')
        ? 'User does not exist. Please check your email or sign up.'
        : error.message || 'An error occurred. Please try again.';

      showToast(errorMessage, 'error', '#dc3545');
    } finally{
      setPending(false)
    }
  };

  const handleSocialSignIn = async (method) => {
    try {
      // Sign in using Google
      setPending(true)
      await method();
      showToast('Welcome to KraftFix!', 'success', '#007bff');
      navigate(location?.state || "/");
    } catch (error) {
      console.error("Social sign-in error:", error);
      showToast('An error occurred. Please try again.', 'error', '#dc3545');
    } finally{
      setPending(false)
    }
  };

  return (
    <section className="">
      <div className="bg-cover bg-no-repeat bg-center py-20 min-h-screen flex items-center justify-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})` }}>
        <div className="px-5 lg:px-28 rounded-sm grid grid-cols-1 lg:grid-cols-2 h-half lg:h-[80vh]">
          <div className="bg-no-repeat bg-cover bg-center hidden md:flex flex-col items-center justify-center rounded-s-lg" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})` }}>
            <img className="w-1/5 mx-auto" src="/logo.png" alt="Logo" />
            <p className="font-semibold max-w-lg text-center text-white">
              Join our community by signing up for an account.
            </p>
          </div>
          <div className="bg-white/35 backdrop-blur-md flex flex-col justify-center py-10 lg:py-20 px-7 space-y-4 rounded-s-lg lg:rounded-s-none rounded-e-lg">
            <form onSubmit={handleSubmit(onSubmit)} id="signUp" className="space-y-3">
              <TextInp title="Name" name="name" register={register} />
              <TextInp title="Email" name="email" register={register} />
              <PasswordInp title="Password" name="password" register={register} errors={errors} />
              <PrimaryBtn text="Sign Up" loading={pending} />
            </form>
            <div className="text-center">
              <p className="font-semibold cursor-pointer transition-all">
                Already have an account?
                <Link to={"/logIn"} state={location.state} className="text-blue-800 hover:underline ml-3">Log In</Link>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <hr className="border-base-content border-b w-full" />
              <span className="font-bold text-xl">Or</span>
              <hr className="border-base-content border-b w-full" />
            </div>
            <button disabled={pending} className="flex flex-col lg:flex-row items-center justify-around space-y-3 lg:space-y-0">
              <span onClick={() => handleSocialSignIn(signInWithGoogle)} className="px-5 py-3 h-14 bg-white rounded-md flex items-center cursor-pointer gap-2 justify-center w-3/4 lg:w-2/5 text-nowrap text-sm lg:text-xl font-bold text-black">
              <FcGoogle className="text-5xl" />
                Continue With Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
