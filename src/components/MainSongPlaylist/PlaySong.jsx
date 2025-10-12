import Footer from "../Footer";

import { FaCirclePlay } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { IoIosList } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import Trendingcard from "../RightMain/Trendingcard";

const PlaySong = () => {
  return (
    <div className="h-[88vh] w-[70vw] rounded-lg bg-[#121212] text-white flex flex-col p-2 overflow-y-scroll">
      <div className="upperSongPlayer flex flex-row gap-5">
        <div className="songimg">
          <img
            className="h-[170px] w-full object-cover"
            src="../src/songdemo3.jpg"
            alt="songimg"
          />
        </div>
        <div className="songInfo p-4">
          <p className="text-[15px]">Single</p>
          <h2 className="text-[70px] font-bold">Kashish</h2>
          <p>
            <span className="font-bold">
              Ashish Bhaatia . Omar Sanu . Kasish Ratnani{" "}
            </span>
            . 2024 . 1song, 3mins 30sec
          </p>
        </div>
      </div>

      <div className="lowerSongPlayer">
        <div className="playbtns flex flex-row justify-between items-center mt-5 p-2">
          <div className="play-btns flex gap-7 items-center">
            <FaCirclePlay className="text-green-400 h-[50px] w-[50px]  cursor-pointer" />
            <IoMdAddCircleOutline className="h-[40px] w-[40px]  cursor-pointer text-gray-400" />
            <IoIosMore className="h-[30px] w-[30px]  cursor-pointer text-gray-400" />
          </div>

          <div className="list-songs flex gap-3  cursor-pointer text-gray-400 items-center">
            <div className="list ">Lists</div>
            <IoIosList className="h-[25px] w-[20px] " />
          </div>
        </div>

        <div className="title-songs flex justify-between">
          <p># Title</p>
          <div className="duration">
            <CiClock2 className="h-[20px] w-[20px]" />
          </div>
        </div>

        <div className="horz-bar h-[1px] w-[full] border border-gray-400"></div>

        <div className="song-bar bg-[#5A5A5A] rounded-xl mt-2 flex justify-between items-center p-3 ">
          <div className="songplaybtn">
            <FaCirclePlay />
          </div>
          <div className="song">
            <h3 className="text-7px font-bold">Kashish</h3>
            <p className="text-6px">
              Ashish Bhaatia, Omar Sanu, Kasish Ratnani
            </p>
          </div>
          <div className="add-song">
            <IoMdAddCircleOutline />
          </div>

          <div className="time-duration">
            <p>2:49</p>
          </div>
          <div className="more-options">
            <IoIosMore />
          </div>
        </div>

        <div className="playlist-info text-gray-400 mt-4">
          <p className="text-[15px]">November 22, 2022</p>
          <p className="text-[14px]">&copy; 2022 Zee Music Company</p>
          <p className="text-[14px]">&#8471; 2022 Zee Music Company</p>
        </div>
      </div>

      <div className="more-playlist mt-4 p-5  ">
        <h1 className="text-2xl font-bold">Trending songs by Kashish</h1>
        <div className="morePlaylistList flex flex-row justify-center items-center gap-3">
          <Trendingcard
            img="../src/songdemo1.jpg"
            h1="Music Heading"
            p="Habib Wahid, Nancy"
          />
          <Trendingcard
            img="../src/songdemo1.jpg"
            h1="Music Heading"
            p="Habib Wahid, Nancy"
          />
          <Trendingcard
            img="../src/songdemo1.jpg"
            h1="Music Heading"
            p="Habib Wahid, Nancy"
          />
          <Trendingcard
            img="../src/songdemo1.jpg"
            h1="Music Heading"
            p="Habib Wahid, Nancy"
          />
        </div>
      </div>

      <div className="footer w-full p-2"><Footer /></div>
      
    </div>
  );
};

export default PlaySong;
