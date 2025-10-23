import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Email + Password Login
  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google login success:", user);
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } catch (error) {
      console.error("Google login error:", error);
      alert(error.message);
    }
  };

  // ✅ Facebook Login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log("Facebook login success:", user);
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } catch (error) {
      console.error("Facebook login error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="bg-[#121212] text-white flex items-center justify-center h-screen">
      <div className="w-[300px] flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Welcome back</h1>

        {/* Email & Password Fields */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[50px] w-[300px] border border-gray-400 mb-3 px-3 bg-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-[50px] w-[300px] border border-gray-400 mb-5 px-3 bg-transparent"
        />

        {/* Email Login */}
        <button
          onClick={handleEmailLogin}
          className="bg-[#3BE477] rounded-full h-[50px] w-[300px] font-bold text-black hover:scale-105 transition-all duration-300"
        >
          Continue
        </button>

        <p className="mt-5 text-gray-400">or</p>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="border border-gray-400 rounded-full h-[50px] w-[300px] flex items-center justify-center gap-3 hover:border-white hover:scale-105 transition-all duration-300 mt-3"
        >
          <FcGoogle /> Continue with Google
        </button>

        {/* Facebook Login */}
        <button
          onClick={handleFacebookLogin}
          className="border border-gray-400 rounded-full h-[50px] w-[300px] flex items-center justify-center gap-3 hover:border-white hover:scale-105 transition-all duration-300 mt-3"
        >
          <FaFacebook className="text-blue-400" /> Continue with Facebook
        </button>

        {/* Apple (placeholder) */}
        <button
          disabled
          className="border border-gray-400 rounded-full h-[50px] w-[300px] flex items-center justify-center gap-3 opacity-50 mt-3 cursor-not-allowed"
        >
          <FaApple /> Continue with Apple
        </button>
      </div>
    </div>
  );
};

export default Login;
