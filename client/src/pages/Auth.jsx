

import React from "react";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";
import { ServerUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function Auth({ isModel = false }) {
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      // 1. Firebase Google Login
      console.log("Google login started...");

      const response = await signInWithPopup(auth, provider);

      console.log("Firebase login successful:", response.user);

      const user = response.user;

      const name = user.displayName;
      const email = user.email;

      console.log("User:", name, email);

      // 2. Send user to backend
      console.log("Sending user to backend...");

      const result = await axios.post(
        ServerUrl + "/api/auth/google",
        {
          name,
          email,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Backend response:", result.data);

      // 3. Save user in Redux
      dispatch(setUserData(result.data));

      console.log("Login completed successfully!");
    } catch (error) {
      console.error("GOOGLE AUTH ERROR:", error);

      if (error.code) {
        console.error("Firebase error code:", error.code);
        console.error("Firebase error message:", error.message);
      }

      if (error.response) {
        console.error("Backend status:", error.response.status);
        console.error("Backend response:", error.response.data);
      }

      dispatch(setUserData(null));
    }
  };

  return (
    <div
      className={`
        w-full
        ${
          isModel
            ? "py-4"
            : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"
        }
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05 }}
        className={`
          w-full
          ${
            isModel
              ? "max-w-md p-8 rounded-3xl"
              : "max-w-lg p-12 rounded-[32px]"
          }
          bg-white shadow-2xl border border-gray-200
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <IoSparkles className="text-green-600" size={20} />
          </div>

          <h2 className="font-semibold text-lg">InterviewIQ.AI</h2>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">
          Continue with{" "}
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
            <IoSparkles size={16} />
            AI Smart Interview
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
          Sign in to start AI-powered mock interviews, track your progress,
          and unlock detailed performance insights.
        </p>

        {/* Google Button */}
        <motion.button
          type="button"
          onClick={handleGoogleAuth}
          whileHover={{ opacity: 0.9, scale: 1.03 }}
          whileTap={{ opacity: 1, scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md"
        >
          <FcGoogle size={20} />
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Auth;