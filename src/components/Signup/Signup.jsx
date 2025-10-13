import { SlSocialSpotify } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="bg-[#121212] text-white flex items-center justify-center h-[100vh] w-screen ">
      <div className="login-div bg-transparent flex flex-col items-center justify-center">
        <div className="login-logo flex justify-center mt-3 ">
          <SlSocialSpotify className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px] text-green-400" />
        </div>

        <div className="welcome flex justify-center">
          <h1 className="text-4xl font-bold w-[260px] text-center">Sign up to start listening</h1>
        </div>
        <div className="username flex flex-col gap-2 mt-10">
          <label>Email address</label>
          <input
            type="text"
            placeholder="name@domain.com"
            className="h-[50px] w-[300px] border border-gray-400 p-2"
          />

          <button className="bg-[#3BE477] cursor-pointer rounded-full h-[50px] w-[300px] font-bold text-black hover:scale-105 transition-all duration-300">
            Next
          </button>

          <div className="flex justify-center">
            <p>or</p>
          </div>

          <div className="socialacc-btns flex flex-col gap-2">
            <div className="button-1">
              <button className="bg-transparent border  border-gray-400 cursor-pointer rounded-full h-[50px] w-[300px] font-bold flex flex-row gap-4 justify-center items-center hover:border-white hover:scale-105 transition-all duration-300">
                <div>
                  <FcGoogle className="h-[20px] w-[20px] " />
                </div>
                Sign up with Google
              </button>
            </div>



            <div className="button-1">
              <button className="bg-transparent border  border-gray-400 cursor-pointer rounded-full h-[50px] w-[300px] font-bold flex flex-row gap-4 justify-center items-center hover:scale-105 transition-all duration-300">
                <div>
                  <FaApple className="h-[20px] w-[20px]" />
                </div>
                Sign up with Apple
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <p>Already have an account?</p>
          </div>

          <div className="signup-btn flex justify-center">
            <button className="cursor-pointer font-bold">Log in</button>
          </div>

          <div className="policy text-center text-[12px] text-gray-400 w-[280px] px-2 break-words">
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
