import { FaPlus } from "react-icons/fa6";

const UserLibrary = () => {
  return (
    <div className="h-[77vh] w-[30vw] rounded-lg bg-[#121212] text-white p-5">
      <div className="library-part flex flex-col h-full">
        
        {/* Top */}
        <div className="library-top flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Library</h1>
          <div className="playlist-btn">
            <FaPlus />
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="library-cards h-[170px] flex flex-col items-center mt-10">
          <div className="playlist-card h-[120px] w-[310px] flex flex-col items-center justify-center p-3 rounded-xl bg-[#1F1F1F]">
            <h2 className="font-bold text-[15px]">Create your first playlist</h2>
            <p className="text-[13px]">It's easy, we'll help you</p>
            <button className="text-black bg-white h-7 px-4 rounded-2xl font-bold text-sm mt-3">
              Create playlist
            </button>
          </div>

          <div className="playlist-card h-[120px] w-[310px] flex flex-col items-center justify-center p-3 rounded-xl bg-[#1F1F1F] mt-4 ">
            <h2 className="font-bold text-[15px]">Let's find some podcasts to follow</h2>
            <p className="text-[13px]">We'll keep you updated on new episodes</p>
            <button className="text-black bg-white h-7 px-4 rounded-2xl font-bold text-sm mt-3">
              Browse podcasts
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserLibrary
