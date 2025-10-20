import React from "react";
import Navbar from "../Navbar";
import Library from "../Library/Library";
import Main from "../RightMain/Main";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-2">
        <Library />
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
