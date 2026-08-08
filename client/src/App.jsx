import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import InterviewPage from "./pages/InterviewPage";
import InterviewHistory from "./pages/InterviewHistory";
import Pricing from "./pages/Pricing";
import InterviewReport from "./pages/InterviewReport";

import { setUserData } from "./redux/userSlice";

export const ServerUrl = import.meta.env.VITE_SERVER_URL;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // If we have a token saved from a previous session, attach it to
    // every axios request before we try to fetch the current user.
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
    }

    const getUser = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/user/current-user",
          {
            withCredentials: true,
          }
        );

        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
        // Token is invalid/expired — clear it so we don't keep sending a bad one.
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        dispatch(setUserData(null));
      }
    };

    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/history" element={<InterviewHistory />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/report/:id" element={<InterviewReport />} />
    </Routes>
  );
}

export default App;
