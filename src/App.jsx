import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import MainSongPlay from "./components/MainSongPlaylist/MainSongPlay";
import Signup from "./components/Signup/Signup";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import ProtectedRoute from "./ProtectedRoute";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        {/* Homepage with Navbar + Library + Main */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <MainSongPlay />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
