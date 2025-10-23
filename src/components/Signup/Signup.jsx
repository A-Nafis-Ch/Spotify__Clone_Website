import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlSocialSpotify } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Handle email signup
  const handleEmailSignup = async () => {
    if (!email || !password) return alert("Please enter both email and password.");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🔹 Handle Google signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-[#121212] text-white flex items-center justify-center h-[100vh] w-screen">
      <div className="login-div bg-transparent flex flex-col items-center justify-center">
        {/* Spotify Logo */}
        <div className="login-logo flex justify-center mt-3">
          <SlSocialSpotify className="h-[40px] w-[30px] text-green-400" />
        </div>

        {/* Heading */}
        <div className="welcome flex justify-center">
          <h1 className="text-4xl font-bold w-[260px] text-center">
            Sign up to start listening
          </h1>
        </div>

        {/* Form */}
        <div className="username flex flex-col gap-2 mt-10">
          <label>Email address</label>
          <input
            type="text"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[50px] w-[300px] border border-gray-400 p-2 bg-transparent text-white focus:outline-none focus:border-white"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[50px] w-[300px] border border-gray-400 p-2 bg-transparent text-white focus:outline-none focus:border-white"
          />

          <button
            onClick={handleEmailSignup}
            className="bg-[#3BE477] cursor-pointer rounded-full h-[50px] w-[300px] font-bold text-black hover:scale-105 transition-all duration-300 mt-2"
          >
            Next
          </button>

          <div className="flex justify-center mt-4">
            <p>or</p>
          </div>

          {/* Google Signup */}
          <div className="socialacc-btns flex flex-col gap-2">
            <button
              onClick={handleGoogleSignup}
              className="bg-transparent border border-gray-400 cursor-pointer rounded-full h-[50px] w-[300px] font-bold flex flex-row gap-4 justify-center items-center hover:border-white hover:scale-105 transition-all duration-300"
            >
              <FcGoogle className="h-[20px] w-[20px]" />
              Sign up with Google
            </button>

            {/* Apple Button (non-functional placeholder) */}
            <button className="bg-transparent border border-gray-400 cursor-pointer rounded-full h-[50px] w-[300px] font-bold flex flex-row gap-4 justify-center items-center hover:scale-105 transition-all duration-300 opacity-60">
              <FaApple className="h-[20px] w-[20px]" />
              Sign up with Apple
            </button>
          </div>

          <div className="flex justify-center mt-5">
            <p>Already have an account?</p>
          </div>

          <div className="signup-btn flex justify-center">
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer font-bold text-[#3BE477] hover:underline"
            >
              Log in
            </button>
          </div>

          <div className="policy text-center text-[12px] text-gray-400 w-[280px] px-2 break-words mt-4">
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
