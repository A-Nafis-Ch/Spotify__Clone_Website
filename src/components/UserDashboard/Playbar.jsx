import { FaShuffle } from "react-icons/fa6";
import { RiContractLeftFill } from "react-icons/ri";
import { RiContractRightFill } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import { RiRepeat2Line } from "react-icons/ri";

const Playbar = () => {
  return (
    <div className="bg-transparent text-white flex flex-row items-center justify-around p-10">
      <div className="currentPlaylist"></div>
      <div className="playbar-btns ">
        <div className="btns flex flex-row items-center justify-center gap-5">
          <div className="shuffle">
            <FaShuffle className="h-[25px] w-[25px] cursor-pointer" />
          </div>
          <div className="left-track">
            <RiContractLeftFill className="h-[25px] w-[25px] cursor-pointer" />
          </div>
          <div className="play">
            <FaCirclePlay className="h-[25px] w-[25px] cursor-pointer" />
          </div>
          <div className="right-track">
            <RiContractRightFill className="h-[25px] w-[25px] cursor-pointer" />
          </div>
          <div className="repeat">
            <RiRepeat2Line className="h-[25px] w-[25px] cursor-pointer" />
          </div>
        </div>

        <div className="duration-bar mt-4 flex flex-row items-center gap-2">
          <div className="start-time">0:00</div>
          <div className="bar-set">
            <div className="duration-dot h-[5px] w-[5px] bg-white rounded-full"></div>
            <div className="duration-line border border-white-400 h-[2px] w-[400px]"></div>
          </div>

          <div className="end-time">0:00</div>
        </div>
      </div>
      <div className="playbar-controllers"></div>
    </div>
  );
};

export default Playbar;
