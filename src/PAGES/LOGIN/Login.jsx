import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PasswordInp from "../../COMPONENTS/FUNCTIONALINPUTS/PasswordInp";
import TextInp from "../../COMPONENTS/FUNCTIONALINPUTS/TextInp";
import toast from "react-hot-toast";
import useAuth from "../../HOOKS/useAuth";

const LogIn = () => {
  const img = "https://source.unsplash.com/featured/1080x720/?exotic";
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useAuth();

  const onSubmit = (data, e) => {
    const { email, pass } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)) {
      return toast.error(
        "Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long",
        {
          position: "top-center",
          style: {
            backgroundColor: "#dc3545",
            color: "white",
            fontSize: "13px",
          },
        }
      );
    }
    signInUser(email, pass)
      .then(() => {
        e.target.reset();
        navigate(location?.state || "/");
        toast.success("Welcome Back to KraftFix", {
          position: "top-center",
          style: {
            backgroundColor: "#007bff",
            color: "white",
          },
        });
      })
      .catch((err) => {
        console.log(err);
        const errorMessage =
          err.message || "An error occurred. Please try again.";
        toast.error(errorMessage, {
          position: "top-center",
          style: {
            backgroundColor: "#dc3545",
            color: "white",
          },
        });
      });
  };

  const handleSocialSignIn = async (method) => {
    try {
      await method();
      toast.success("Welcome Back to KraftFix", {
        position: "top-center",
        style: {
          backgroundColor: "#007bff",
          color: "white",
        },
      });
      navigate(location?.state || "/");
    } catch (error) {
      console.error("Error during social sign-in or token request:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        style: {
          backgroundColor: "#dc3545",
          color: "white",
        },
      });
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
              Please enter your details to sign up and be part of our great community.
            </p>
          </div>
          <div className="bg-white/35 backdrop-blur-md flex flex-col justify-center py-10 lg:py-20 px-7 space-y-4 rounded-s-lg lg:rounded-s-none rounded-e-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="logIn"
              className="space-y-3"
            >
              <TextInp title="Email" name="email" id="email" register={register} />
              <PasswordInp title="Password" register={register} />
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Log In
              </button>
            </form>
            <div className="text-center">
              <p className="font-semibold cursor-pointer transition-all">
                New Here?
                <Link
                  to={"/signUp"}
                  state={location.state}
                  className="text-blue-800 hover:underline ml-3"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <hr className="border-base-content border-b w-full" />
              <span className="font-bold text-xl">Or</span>
              <hr className="border-base-content border-b w-full" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-around space-y-3 lg:space-y-0">
              <span
                onClick={() => handleSocialSignIn(signInWithGoogle)}
                className="px-5 py-3 h-14 bg-white rounded-md flex items-center cursor-pointer gap-2 justify-center w-3/4 lg:w-2/5 text-nowrap text-sm lg:text-xl font-bold text-black"
              >
                GG
                Continue With Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
