import Footer from "../Footer";

import Trendingcard from "../RightMain/Trendingcard";
import PopularAlbum from "../RightMain/PopularAlbum";
import PopularRadio from "../RightMain/PopularRadio";
import FeaturedCharts from "../RightMain/FeaturedCharts";

const UserMain = () => {
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
          Abdullah Nafis Chowdhury
        </h1>
      </div>

      <div className="mainItemsContainer flex flex-col items-center">
        <div className="trending-songs">
          <h1 className="text-2xl font-bold">Trending songs</h1>
          <div className="trendingsongslist flex flex-row gap-2">
            <Trendingcard
              onClick={() => navigate("/playlist")}
              img="../src/songdemo1.jpg"
              h1="Music Heading"
              p="Habib Wahid, Nancy"
            />
            <Trendingcard
              img="../src/songdemo2.jpg"
              h1="Don't Say You Love Me"
              p="Jin"
            />
            <Trendingcard
              img="../src/songdemo3.jpg"
              h1="Kashish"
              p="Afusic, AliSomroMusic"
            />
            <Trendingcard
              img="../src/songdemo4.jpg"
              h1="Pal Pal"
              p="Shilpa Rao, Ujwal"
            />
          </div>
        </div>

        <div className="popular-album mt-4">
          <h1 className="text-2xl font-bold">Popular albums and singles</h1>
          <div className="popularalbumlist flex flex-row gap-2">
            <PopularAlbum
              img="../src/songdemo1.jpg"
              h1="Music Heading"
              p="Habib Wahid, Nancy"
            />
            <PopularAlbum
              img="../src/songdemo2.jpg"
              h1="Don't Say You Love Me"
              p="Jin"
            />
            <PopularAlbum
              img="../src/songdemo3.jpg"
              h1="Kashish"
              p="Afusic, AliSomroMusic"
            />
            <PopularAlbum
              img="../src/songdemo4.jpg"
              h1="Pal Pal"
              p="Shilpa Rao, Ujwal"
            />
          </div>
        </div>

        <div className="popular-radio mt-4">
          <h1 className="text-2xl font-bold">Popular radio</h1>
          <div className="popularradiolist flex flex-row gap-2">
            <PopularRadio img="../src/songdemo1.jpg" p="Habib Wahid, Nancy" />
            <PopularRadio img="../src/songdemo2.jpg" p="Jin" />
            <PopularRadio
              img="../src/songdemo3.jpg"
              p="Afusic, AliSomroMusic"
            />
            <PopularRadio img="../src/songdemo4.jpg" p="Shilpa Rao, Ujwal" />
          </div>
        </div>

        <div className="feature-chart mt-4">
          <h1 className="text-2xl font-bold">Featured Charts</h1>
          <div className="featuredchartlist flex flex-row gap-2">
            <FeaturedCharts img="../src/songdemo1.jpg" p="Habib Wahid, Nancy" />
            <FeaturedCharts img="../src/songdemo2.jpg" p="Jin" />
            <FeaturedCharts
              img="../src/songdemo3.jpg"
              p="Afusic, AliSomroMusic"
            />
            <FeaturedCharts img="../src/songdemo4.jpg" p="Shilpa Rao, Ujwal" />
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
