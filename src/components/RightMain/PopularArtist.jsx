import React from 'react'

const PopularArtist = ({ song }) => {
    return (
        <div key={song.id} className="h-[220px] w-[200px] bg-[#1F1F1F] mt-5  rounded-lg overflow-hidden p-2">

            <div className='flex justify-center'>
                <img
                    className="h-[100px] w-[100px] object-cover rounded-full"
                    src={song.cover}
                    alt={song.title}
                />
            </div>

            <h1 className="text-[16px] mt-2 font-bold truncate">
                {song.title}
            </h1>
            <p className="text-[12px] mt-1 text-gray-300 truncate">
                {song.artist}
            </p>
        </div>
    )
}

export default PopularArtist
