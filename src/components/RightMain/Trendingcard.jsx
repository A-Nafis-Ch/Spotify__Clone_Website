import React from "react";

const Trendingcard = ({ song, onClick }) => {

  if(!song) return null;
  return (
    <div
      key={song.id}
      onClick={onClick}
      className="cursor-pointer h-[220px] w-[200px] bg-[#1F1F1F] mt-5 rounded-lg overflow-hidden p-2 hover:bg-[#2a2a2a] transition-all"
    >
      <img
        className="h-[100px] w-full object-cover rounded"
        src={song.cover}
        alt={song.title}
      />
      <h1 className="text-[16px] mt-2 font-bold truncate">{song.title}</h1>
      <p className="text-[12px] mt-1 text-gray-300 truncate">{song.artist}</p>
    </div>
  );
};

export default Trendingcard;
