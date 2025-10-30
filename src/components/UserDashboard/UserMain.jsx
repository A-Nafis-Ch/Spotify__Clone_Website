import Footer from "../Footer";

import Trendingcard from "../RightMain/Trendingcard";
import PopularAlbum from "../RightMain/PopularAlbum";
import PopularRadio from "../RightMain/PopularRadio";
import FeaturedCharts from "../RightMain/FeaturedCharts";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

const UserMain = () => {

  const navigate = useNavigate();
  
  const { songs } = useData();

  const { user } = useAuth();
  const email = user?.email || "";

  let userName = email.split("@")[0];

  userName = userName.replace(/[^a-zA-Z]/g, "");

  const formattedUsername =
    userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  return (
    <div className="h-[77vh] w-[70vw] rounded-lg bg-[#121212] text-white flex flex-col  p-5 overflow-y-scroll">
      <div className="music-btns flex gap-2">
        <button className="h-[30px] w-[50px] bg-[#3F3F3F] rounded-[5px] cursor-pointer">
          All
        </button>
        <button className="h-[30px] w-[50px] bg-[#3F3F3F] rounded-[5px]  cursor-pointer">
          Music
        </button>
      </div>

      <div className="username-playlist flex flex-col">
        <p className="text-[15px] text-gray-400">Made for</p>
        <h1 className="text-[22px] font-bold hover:underline cursor-pointer">
          {`Welcome ${formattedUsername} !`}
        </h1>
      </div>

      <div className="mainItemsContainer flex flex-col items-center">
        <div className="trending-songs">
          <h1 className="text-2xl font-bold">Trending songs</h1>

          <div className="trendingsongslist flex flex-row gap-2">
            {songs.slice(0, 4).map((song) => (
              <Trendingcard
                key={song.id}
                song={song}
                onClick={() => navigate("/playlist")}
              />
            ))}
          </div>
        </div>

        <div className="popular-album mt-4">
          <h1 className="text-2xl font-bold">Popular albums and singles</h1>
          <div className="popularalbumlist flex flex-row gap-2">
            {songs.slice(4, 8).map((song) => (
              <PopularAlbum key={song.id} song={song} />
            ))}
          </div>
        </div>

        <div className="popular-radio mt-4">
          <h1 className="text-2xl font-bold">Popular radio</h1>
          <div className="popularradiolist flex flex-row gap-2">
            {songs.slice(6, 10).map((song) => (
              <PopularRadio key={song.id} song={song} />
            ))}
          </div>
        </div>

        <div className="feature-chart mt-4">
          <h1 className="text-2xl font-bold">Featured Charts</h1>
          <div className="featuredchartlist flex flex-row gap-2">
            {songs.slice(2, 6).map((song) => (
              <FeaturedCharts key={song.id} song={song} />
            ))}
          </div>
        </div>

        <div className="footer w-full p-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserMain;
