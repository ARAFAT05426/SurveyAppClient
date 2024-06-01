import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../..//HOOKS/useAuth';
import { FcGoogle } from 'react-icons/fc';
import PrimaryBtn from '../../COMPONENTS/COMMON/BUTTONS/PrimaryBtn';
import TextInp from '../../COMPONENTS/FunctionalInputFields/TextInp';
import PasswordInp from '../../COMPONENTS/FunctionalInputFields/PasswordInp';
import { useForm } from 'react-hook-form';
import useToast from '../../HOOKS/useToast';
import { useState } from 'react';

const LogIn = () => {
  const img = 'https://source.unsplash.com/featured/1080x720/?exotic';
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useAuth();
  const { showToast } = useToast();
  const [pending, setPending] = useState(false)
  const onSubmit = async (data, e) => {
    const { email, password } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return showToast(
        'Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long',
        'error',
        '#dc3545'
      );
    }

    try {
      setPending(true)
      await signInUser(email, password);
      e.target.reset();
      navigate(location?.state || '/');
      showToast('Welcome Back to KraftFix', 'success', '#007bff');
    } catch (error) {
      console.error(error.message);
      const errorMessage = error.message.includes('auth/invalid-credential')
        ? 'User does not exist. Please check your email or sign up.'
        : error.message || 'An error occurred. Please try again.';

      showToast(errorMessage, 'error', '#dc3545');
    }finally{
      setPending(false)
    }
  };

  const handleSocialSignIn = async (method) => {
    try {
      setPending(true)
      await method();
      showToast('Welcome Back to KraftFix', 'success', '#007bff');
      navigate(location?.state || '/');
    } catch (error) {
      console.error('Error during social sign-in:', error);
      showToast('An error occurred. Please try again.', 'error', '#dc3545');
    }finally{
      setPending(false)
    }
  };

  return (
    <section className="">
      <div
        className="bg-cover bg-no-repeat bg-center py-20 min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
        }}
      >
        <div className="px-5 lg:px-28 rounded-sm grid grid-cols-1 lg:grid-cols-2 h-half lg:h-[80vh]">
          <div
            className="bg-no-repeat bg-cover bg-center hidden md:flex flex-col items-center justify-center rounded-s-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})`,
            }}
          >
            <img className="w-1/5 mx-auto" src="/logo.png" alt="Logo" />
            <p className="font-semibold max-w-lg text-center text-white">
              Please enter your details to sign in and be part of our great community.
            </p>
          </div>
          <div className="bg-white/35 backdrop-blur-md flex flex-col justify-center py-10 lg:py-20 px-7 space-y-4 rounded-s-lg lg:rounded-s-none rounded-e-lg">
            <form onSubmit={handleSubmit(onSubmit)} id="logIn" className="space-y-3">
              <TextInp title="Email" name="email" id="email" register={register} />
              <PasswordInp title="Password" name="password" register={register} />
              <PrimaryBtn text="Log In" type="submit" loading={pending} />
            </form>
            <div className="text-center">
              <p className="font-semibold cursor-pointer transition-all">
                New Here?
                <Link to={'/signUp'} state={location.state} className="text-blue-800 hover:underline ml-3">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <hr className="border-base-content border-b w-full" />
              <span className="font-bold text-xl">Or</span>
              <hr className="border-base-content border-b w-full" />
            </div>
            <button disabled={pending} className="flex flex-col lg:flex-row items-center justify-around space-y-3 lg:space-y-0">
              <span
                onClick={() => handleSocialSignIn(signInWithGoogle)}
                className="px-5 py-3 h-14 bg-white rounded-md flex items-center cursor-pointer gap-2 justify-center w-3/4 lg:w-2/5 text-nowrap text-xs lg:text-xl font-bold text-black"
              >
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

export default LogIn;
