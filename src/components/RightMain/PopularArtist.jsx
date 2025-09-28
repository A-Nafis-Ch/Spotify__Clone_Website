import React from 'react'

const PopularArtist = ({ img, h1, p }) => {
    return (
        <div className="h-[220px] w-[200px] bg-[#1F1F1F] mt-5  rounded-lg overflow-hidden p-2">

            <div className='flex justify-center'>
                <img
                    className="h-[100px] w-[100px] object-cover rounded-full"
                    src={img}
                    alt="playlist"
                />
            </div>

            <h1 className="text-[16px] mt-2 font-bold truncate">
                {h1}
            </h1>
            <p className="text-[12px] mt-1 text-gray-300 truncate">
                {p}
            </p>
        </div>
    )
}

export default PopularArtist
