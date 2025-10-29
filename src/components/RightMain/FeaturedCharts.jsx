import React from 'react'

const FeaturedCharts = ({song}) => {
    if(!song) return null;
    
    return (

        <div key={song.id} className="h-[220px] w-[200px] bg-[#1F1F1F] mt-5  rounded-lg overflow-hidden p-2">
            <img
                className="h-[130px] w-full object-cover rounded"
                src={song.cover}
                alt={song.title}
            />

            <p className="text-[12px] mt-1 text-gray-300 truncate">
                {song.artist}
            </p>
        </div>

    )
}

export default FeaturedCharts
