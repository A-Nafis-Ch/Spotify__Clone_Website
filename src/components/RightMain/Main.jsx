import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Trendingcard from "./Trendingcard";
import PopularArtist from "./PopularArtist";
import PopularAlbum from "./PopularAlbum";
import PopularRadio from "./PopularRadio";
import FeaturedCharts from "./FeaturedCharts";
import Footer from "../Footer";

const Main = () => {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch("/data/spotify.json");
        const data = await res.json();
        console.log("Fetched songs data:", data);
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="h-[88vh] w-[70vw] rounded-lg bg-[#121212] text-white flex flex-col items-start p-5 overflow-y-scroll">
      {/* ================= TRENDING SONGS ================= */}
      <div className="trending-songs w-full">
        <h1 className="text-2xl font-bold mb-4">Trending Songs</h1>

        {/* First 4 trending cards */}
        <div className="flex flex-wrap gap-4 mb-6 p-5">
          {songs.length > 0 ? (
            songs
              .slice(0, 4)
              .map((song) => (
                <Trendingcard
                  key={song.id}
                  song={song}
                  onClick={() => navigate("/playlist")}
                />
              ))
          ) : (
            <p>Loading songs...</p>
          )}
        </div>

        {/* Remaining songs (horizontal scroll) */}
        <h2 className="text-xl font-semibold mb-3">More Trending</h2>
        <div className="flex overflow-x-auto gap-4 pb-4 p-5 scrollbar-hide">
          {songs.slice(4).map((song) => (
            <Trendingcard
              key={song.id}
              song={song}
              onClick={() => navigate("#")}
            />
          ))}
        </div>
      </div>

      {/* ================= POPULAR ARTISTS ================= */}
      <div className="popular-albums mt-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Popular Artists</h1>
        <div className="flex flex-row gap-4 p-5 flex-wrap">
          {songs.slice(0,4).map((song) => (
            <PopularArtist key={song.id} song={song} />
          ))}


        </div>
      </div>

      {/* ================= POPULAR ALBUMS ================= */}
      <div className="popular-album mt-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Popular Albums and Singles</h1>
        <div className="flex flex-row gap-4 p-5 flex-wrap">
          {songs.slice(4,8).map((song) =>(

            <PopularAlbum key={song.id}
              song={song}
          />
          
          ))}

        </div>
      </div>

      {/* ================= POPULAR RADIO ================= */}
      <div className="popular-radio mt-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Popular Radio</h1>
        <div className="flex flex-row gap-4 p-5 flex-wrap">
          {songs.slice(2,6).map((song) => (
            <PopularRadio key={song.id} song={song} />
          ))}
          

        </div>
      </div>

      {/* ================= FEATURED CHARTS ================= */}
      <div className="feature-chart mt-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Featured Charts</h1>
        <div className="flex flex-row gap-4 p-5 flex-wrap">
          {songs.slice(6,10).map((song) => (

            <FeaturedCharts key={song.id} song={song}/>

          ))}
          
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="footer w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
