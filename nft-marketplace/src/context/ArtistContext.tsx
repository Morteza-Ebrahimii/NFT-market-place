import React, { createContext, useState, useContext } from "react";
import { artistData } from "../data/data";

type artist = {
  id: number;
  name: string;
  change: number;
  balence: string;
  nftsSold: number;
  volume: number;
  image: string;
  bio: string;
};

interface ArtistContextProps {
  artists: artist[];
  getArtistById: (id: number) => artist | undefined;
}
const artistContext = createContext<ArtistContextProps | undefined>(undefined);

export const useArtistContext = () => {
  const context = useContext(artistContext);
  if (!context) {
    throw new Error("useArtistContext must be used within an ArtistProvider");
  }
  return context;
};

interface ArtistProviderProps {
  children: React.ReactNode;
}
export const ArtistProvider: React.FC<ArtistProviderProps> = ({ children }) => {
  const [artists] = useState(artistData);

  const getArtistById = (id: number) =>
    artists.find((artist) => artist.id === id);

  return (
    <artistContext.Provider value={{ artists, getArtistById }}>
      {children}
    </artistContext.Provider>
  );
};
