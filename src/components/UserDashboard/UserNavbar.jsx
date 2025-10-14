import { useNavigate } from "react-router-dom";

import { SlSocialSpotify } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsBrowserSafari } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdGroups } from "react-icons/md";

const UserNavbar = () => {

    const navigate = useNavigate();

  return (
    <nav className="w-full h-[60px] flex flex-row justify-around text-white items-center">
      <div className="icons text-white flex gap-5 ">
        <SlSocialSpotify className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px] text-green-400" />

        <RiHome5Line
          onClick={() => navigate("/")}
          className="bg-[#1F1F1F] h-[40px] w-[40px] cursor-pointer rounded-full p-2"
        />
      </div>

      <div className="search-bar bg-[#2A2A2A] w-[300px] md:w-[400px] lg:w-[500px] h-[20px] rounded-full flex items-center p-5 ml-5">
        <IoIosSearch className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="bg-transparent border-none outline-none text-white ml-5 w-full"
        />

        <span className="mr-3">|</span>

        <BsBrowserSafari className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />
      </div>

      <div className="nav-buttons flex gap-4">
        <li className="flex gap-10 cursor-pointer items-center">
          <ul className="font-bold text-[12px] text-black bg-[white] p-2 rounded-xl">Explore Premium</ul>
          <ul className="font-bold">Install App</ul>
          <ul className="font-bold"><IoIosNotifications className="h-[20px] w-[20px] text-gray-400" /></ul>
          <ul><MdGroups className="h-[20px] w-[20px] text-gray-400" /></ul>
          <div className="h-[50px] w-[50px] bg-[#1F1F1F] rounded-full flex justify-center items-center"><ul onClick={() => navigate("#")} className="bg-[#7B4A31] h-[35px] w-[35px] rounded-full flex items-center justify-center text-black font-bold cursor-pointer">
            <span>A</span>
          </ul></div>
        </li>
      </div>
    </nav>
  );
};

export default UserNavbar;
