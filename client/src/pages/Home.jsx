import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModel from "../components/AuthModel";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsCheckCircleFill,
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";

function Home() {
  const { userData } = useSelector((state) => state.user);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  const handleInterview = () => {
    if (!userData) {
      setShowAuth(true);
      return;
    }
    navigate("/interview");
  };

  const handleHistory = () => {
    if (!userData) {
      setShowAuth(true);
      return;
    }
    navigate("/history");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col">
      <Navbar />

      <main className="flex-1">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 rounded-full text-sm text-gray-600 mb-7">
                <HiSparkles className="text-green-600" />
                AI-powered interview preparation
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900">
                Practice smarter.
                <br />
                <span className="text-green-600">
                  Interview better.
                </span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mt-7">
                Practice realistic HR and technical interviews with
                AI-generated questions, personalized evaluation, and
                detailed performance insights.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <motion.button
                  onClick={handleInterview}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-8 py-3.5 rounded-xl font-medium"
                >
                  Start Interview
                </motion.button>

                <motion.button
                  onClick={handleHistory}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border border-gray-300 px-8 py-3.5 rounded-xl font-medium"
                >
                  View History
                </motion.button>
              </div>

              <div className="flex flex-wrap gap-6 mt-9 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <BsCheckCircleFill className="text-green-600" />
                  Resume based
                </div>

                <div className="flex items-center gap-2">
                  <BsCheckCircleFill className="text-green-600" />
                  HR + Technical
                </div>

                <div className="flex items-center gap-2">
                  <BsCheckCircleFill className="text-green-600" />
                  AI evaluation
                </div>
              </div>
            </motion.div>

            {/* RIGHT - INTERVIEW PREVIEW */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden">

                {/* TOP BAR */}
                <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">
                      LIVE INTERVIEW
                    </p>
                    <p className="font-semibold text-gray-900">
                      Frontend Developer
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    In progress
                  </div>
                </div>

                {/* QUESTION */}
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                      <BsRobot size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        QUESTION 04 / 10
                      </p>
                      <p className="font-medium">
                        Technical Interview
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold leading-relaxed">
                    How would you optimize the performance of a React
                    application?
                  </h3>

                  <div className="mt-7 bg-gray-50 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        Your response
                      </span>

                      <span className="text-xs text-green-600 font-medium">
                        Recording
                      </span>
                    </div>

                    <div className="flex items-center gap-1 h-10">
                      {[18, 28, 15, 35, 23, 40, 20, 32, 18, 38, 25, 30, 16, 35, 22].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            animate={{ height: [height, height + 8, height] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: index * 0.05,
                            }}
                            className="w-1.5 bg-green-500 rounded-full"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-5">
                    <div className="border border-gray-100 rounded-xl p-3">
                      <p className="text-xs text-gray-400">Confidence</p>
                      <p className="font-semibold mt-1">86%</p>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-3">
                      <p className="text-xs text-gray-400">Accuracy</p>
                      <p className="font-semibold mt-1">91%</p>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-3">
                      <p className="text-xs text-gray-400">Time</p>
                      <p className="font-semibold mt-1">01:24</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ================= INTERVIEW FLOW ================= */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="max-w-2xl mb-14">
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wider">
                How it works
              </p>

              <h2 className="text-4xl font-semibold mt-3">
                From preparation to feedback.
              </h2>

              <p className="text-gray-500 mt-4">
                A simple workflow designed to make every practice
                interview useful.
              </p>
            </div>

            <div className="relative">

              <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gray-200"></div>

              <div className="grid md:grid-cols-3 gap-10 relative">

                {[
                  {
                    number: "01",
                    icon: <BsRobot />,
                    title: "Build your interview",
                    desc: "Upload your resume and select your target role, experience level and interview type.",
                  },
                  {
                    number: "02",
                    icon: <BsMic />,
                    title: "Take the interview",
                    desc: "Answer AI-generated HR or technical questions in a realistic timed environment.",
                  },
                  {
                    number: "03",
                    icon: <BsBarChart />,
                    title: "Understand your performance",
                    desc: "Get scores, detailed feedback and actionable insights to improve your next attempt.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 bg-white border border-gray-300 rounded-full flex items-center justify-center text-green-600 text-xl relative z-10">
                      {item.icon}
                    </div>

                    <p className="text-xs text-gray-400 mt-7">
                      {item.number}
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-sm">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </section>

{/* ================= CAPABILITIES ================= */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center max-w-2xl mx-auto mb-16">
    <p className="text-green-600 text-sm font-semibold uppercase tracking-wider">
      Powerful Features
    </p>

    <h2 className="text-4xl font-semibold mt-3">
      Everything you need to prepare better
    </h2>

    <p className="text-gray-500 mt-4">
      InterviewIQ turns every practice session into meaningful
      feedback and measurable improvement.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-5">

    {[
      {
        icon: <BsBarChart size={22} />,
        number: "01",
        title: "AI Answer Evaluation",
        desc: "Get detailed evaluation of your answers across correctness, confidence and communication.",
      },
      {
        icon: <BsFileEarmarkText size={22} />,
        number: "02",
        title: "Resume-Based Interviews",
        desc: "Practice questions generated around your resume, projects, skills and experience.",
      },
      {
        icon: <BsFileEarmarkText size={22} />,
        number: "03",
        title: "Detailed Reports",
        desc: "Receive question-wise scores, strengths, weaknesses and actionable feedback.",
      },
      {
        icon: <BsBarChart size={22} />,
        number: "04",
        title: "History & Analytics",
        desc: "Review previous interviews and track your improvement across multiple attempts.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -4 }}
        className="group bg-white border border-gray-200 rounded-2xl p-7
                   hover:border-gray-300 hover:shadow-lg transition-all duration-300"
      >

        <div className="flex items-start justify-between">

          <div className="w-11 h-11 rounded-xl bg-green-50
                          text-green-600 flex items-center justify-center">
            {item.icon}
          </div>

          <span className="text-sm text-gray-300 font-medium">
            {item.number}
          </span>

        </div>

        <h3 className="text-xl font-semibold mt-7">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-md">
          {item.desc}
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm
                        text-gray-400 group-hover:text-green-600 transition">
          Explore feature
          <span>→</span>
        </div>

      </motion.div>
    ))}

  </div>

</section>

        {/* ================= INTERVIEW MODES ================= */}
        <section className="bg-[#111111] text-white">
          <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-green-400 text-sm font-semibold uppercase tracking-wider">
                  One platform. Multiple ways to practice.
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
                  Practice the interview
                  <br />
                  you actually need.
                </h2>

                <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
                  Switch between different interview modes and prepare
                  according to the role you are targeting.
                </p>

                <button
                  onClick={handleInterview}
                  className="mt-8 bg-white text-black px-7 py-3 rounded-xl font-medium"
                >
                  Start Practicing
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">

                {[
                  {
                    img: hrImg,
                    title: "HR Interview",
                    desc: "Behavioral questions",
                  },
                  {
                    img: techImg,
                    title: "Technical",
                    desc: "Role-specific questions",
                  },
                  {
                    img: confidenceImg,
                    title: "Confidence",
                    desc: "Communication insights",
                  },
                  {
                    img: creditImg,
                    title: "Credits",
                    desc: "Flexible interview sessions",
                  },
                ].map((mode, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5"
                  >
                    <img
                      src={mode.img}
                      alt={mode.title}
                      className="w-20 h-20 object-contain mb-5"
                    />

                    <h3 className="font-semibold">
                      {mode.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {mode.desc}
                    </p>
                  </motion.div>
                ))}

              </div>

            </div>
          </div>
        </section>

      </main>

      {showAuth && (
        <AuthModel onClose={() => setShowAuth(false)} />
      )}

      <Footer />
    </div>
  );
}

export default Home;