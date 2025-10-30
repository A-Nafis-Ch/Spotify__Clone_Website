// context/DataContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await fetch("/data/spotify.json");
      const data = await res.json();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  return (
    <DataContext.Provider value={{ songs }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
