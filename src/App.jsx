import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Library from "./components/Library/Library";
import Main from "./components/RightMain/Main";
import Login from "./components/Login/Login";
import MainSongPlay from "./components/MainSongPlaylist/MainSongPlay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <MainSongPlay />
              <Navbar />
              <div className="flex gap-2">
                <Library />
                <Main />
              </div>
            </div>
          }
        />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
