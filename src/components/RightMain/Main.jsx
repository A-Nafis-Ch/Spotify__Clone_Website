import React from 'react'
import Trendingcard from './Trendingcard'
import PopularArtist from './PopularArtist'
import PopularAlbum from './PopularAlbum'
import PopularRadio from './PopularRadio'
import FeaturedCharts from './FeaturedCharts'
import Footer from '../Footer'


const Main = () => {
  return (
    <div className='h-[88vh] w-[70vw] rounded-lg bg-[#121212] text-white flex flex-col items-center p-5 overflow-y-scroll'>




      

        <div className="trending-songs">
          <h1 className='text-2xl font-bold'>Trending songs</h1>
          <div className="trendingsongslist flex flex-row gap-2">
            < Trendingcard img="../src/songdemo1.jpg" h1="Music Heading" p="Habib Wahid, Nancy" />
            < Trendingcard img="../src/songdemo2.jpg" h1="Don't Say You Love Me" p="Jin" />
            < Trendingcard img="../src/songdemo3.jpg" h1="Kashish" p="Afusic, AliSomroMusic" />
            < Trendingcard img="../src/songdemo4.jpg" h1="Pal Pal" p="Shilpa Rao, Ujwal" />
          </div>


        </div>

        <div className="popular-albums mt-4">
          <h1 className='text-2xl font-bold'>Popular artists</h1>
          <div className="popularartistlists flex flex-row gap-2">
            < PopularArtist img="../src/songdemo1.jpg" h1="Music Heading" p="Habib Wahid, Nancy" />
            < PopularArtist img="../src/songdemo2.jpg" h1="Don't Say You Love Me" p="Jin" />
            < PopularArtist img="../src/songdemo3.jpg" h1="Kashish" p="Afusic, AliSomroMusic" />
            < PopularArtist img="../src/songdemo4.jpg" h1="Pal Pal" p="Shilpa Rao, Ujwal" />
          </div>


        </div>

        <div className="popular-album mt-4">
          <h1 className='text-2xl font-bold'>Popular albums and singles</h1>
          <div className="popularalbumlist flex flex-row gap-2">
            < PopularAlbum img="../src/songdemo1.jpg" h1="Music Heading" p="Habib Wahid, Nancy" />
            < PopularAlbum img="../src/songdemo2.jpg" h1="Don't Say You Love Me" p="Jin" />
            < PopularAlbum img="../src/songdemo3.jpg" h1="Kashish" p="Afusic, AliSomroMusic" />
            < PopularAlbum img="../src/songdemo4.jpg" h1="Pal Pal" p="Shilpa Rao, Ujwal" />
          </div>


        </div>

        <div className="popular-radio mt-4">
          <h1 className='text-2xl font-bold'>Popular radio</h1>
          <div className="popularradiolist flex flex-row gap-2">
            < PopularRadio img="../src/songdemo1.jpg" p="Habib Wahid, Nancy" />
            < PopularRadio img="../src/songdemo2.jpg" p="Jin" />
            < PopularRadio img="../src/songdemo3.jpg" p="Afusic, AliSomroMusic" />
            < PopularRadio img="../src/songdemo4.jpg" p="Shilpa Rao, Ujwal" />
          </div>


        </div>


        <div className="feature-chart mt-4">
          <h1 className='text-2xl font-bold'>Featured Charts</h1>
          <div className="featuredchartlist flex flex-row gap-2">
            < FeaturedCharts img="../src/songdemo1.jpg" p="Habib Wahid, Nancy" />
            < FeaturedCharts img="../src/songdemo2.jpg" p="Jin" />
            < FeaturedCharts img="../src/songdemo3.jpg" p="Afusic, AliSomroMusic" />
            < FeaturedCharts img="../src/songdemo4.jpg" p="Shilpa Rao, Ujwal" />
          </div>


        </div>

        <div className="footer w-full"><Footer /></div>

      

      


    </div>
  )
}

export default Main
