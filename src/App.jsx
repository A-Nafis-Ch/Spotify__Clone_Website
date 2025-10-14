import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Library from "./components/Library/Library";
import Main from "./components/RightMain/Main";
import Login from "./components/Login/Login";
import MainSongPlay from "./components/MainSongPlaylist/MainSongPlay";
import Signup from "./components/Signup/Signup";
import UserDashboard from "./components/UserDashboard/UserDashboard";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        
        <Route
          path="/"
          element={
            <div>
              <UserDashboard/>
              <Navbar />
              <div className="flex gap-2">
                <Library />
                <Main />
              </div>
            </div>
          }
        />

         {/* Singup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Playlist Route */}

        <Route path="/playlist" element={<MainSongPlay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
