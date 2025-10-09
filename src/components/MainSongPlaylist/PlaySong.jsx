import { FaCirclePlay } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { IoIosList } from "react-icons/io";

const PlaySong = () => {
  return (
    <div className='h-[88vh] w-[70vw] rounded-lg bg-[#121212] text-white flex flex-col p-2 overflow-y-scroll'>

        <div className="upperSongPlayer flex flex-row gap-5">
            <div className="songimg">
                <img className='h-[170px] w-full object-cover' src="../src/songdemo3.jpg" alt="songimg" />
            </div>
            <div className="songInfo p-4">
                <p className="text-[15px]">Single</p>
                <h2 className="text-[70px] font-bold">Kashish</h2>
                <p><span className="font-bold">Ashish Bhaatia . Omar Sanu . Kasish Ratnani </span>. 2024 . 1song, 3mins 30sec</p>
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
                    <div className="list ">Lists</div><IoIosList className="h-[25px] w-[20px] " />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default PlaySong
