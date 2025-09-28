import React from 'react'

const PopularRadio = ({img, p}) => {
  return (

    <div className="h-[220px] w-[200px] bg-[#1F1F1F] mt-5  rounded-lg overflow-hidden p-2">
      <img
        className="h-[100px] w-full object-cover rounded"
        src={img}
        alt="PopularRadio"
      />

      <p className="text-[12px] mt-1 text-gray-300 truncate">
        {p}
      </p>
    </div>
    
  )
}

export default PopularRadio
