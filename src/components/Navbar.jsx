import { useNavigate } from "react-router-dom";


import { SlSocialSpotify } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsBrowserSafari } from "react-icons/bs";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="w-full h-[60px] flex flex-row justify-around text-white items-center">
      <div className="icons text-white flex gap-5 ">

        <SlSocialSpotify className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px] text-green-400" />

        <RiHome5Line onClick={()=>navigate('/')} className="bg-[#1F1F1F] h-[40px] w-[40px] cursor-pointer rounded-full p-2"/>

      </div>

      <div className="search-bar bg-[#2A2A2A] w-[300px] md:w-[400px] lg:w-[500px] h-[20px] rounded-full flex items-center p-5 ml-5">
        <IoIosSearch className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />
        <input type="text" placeholder="What do you want to play?" className="bg-transparent border-none outline-none text-white ml-5 w-full" />

        <span className="mr-3">|</span>

        <BsBrowserSafari className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]"/>
      </div>

      <div className="nav-buttons flex gap-4">
        <li className="flex gap-5 cursor-pointer items-center">
          <ul className="font-bold" >Premium</ul>
          <ul className="font-bold">Support</ul>
          <ul className="font-bold">Download</ul>
          <ul>|</ul>
          <ul>Install App</ul>
          <ul onClick={()=>navigate('/signup')} className="">Sign up</ul>
        </li>

        <button  onClick={() => navigate('/login')} className="text-black bg-white h-10 w-17 rounded-2xl text-[12px] font-bold cursor-pointer">Login</button>
      </div>


    </nav>
  )
}

export default Navbar
