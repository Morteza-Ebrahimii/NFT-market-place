import React, { createContext, useState, useContext } from "react";
import { nftData } from "../data/data";

interface NftCard {
  id: number;
  name: string;
  price: number;
  highest_bid: number;
  image: string;
  minted_on: string;
  description: string;
  websites: string[];
  categories: string[];
  artistId: number;
}
interface NftContextProps {
  nftCards: NftCard[];
  getNftById: (id: number) => NftCard | undefined;
}
const NftContext = createContext<NftContextProps | undefined>(undefined);

export const useNftContext = () => {
  const context = useContext(NftContext);
  if (!context) {
    throw new Error("useNftContext must be used within an NftProvider");
  }
  return context;
};

interface NftProviderProps {
  children: React.ReactNode;
}
export const NftProvider: React.FC<NftProviderProps> = ({ children }) => {
    const [nftCards] = useState<NftCard[]>(nftData);

  const getNftById = (id: number) => nftCards.find((nft) => nft.id === id);

  return (
    <NftContext.Provider value={{ nftCards, getNftById }}>
      {children}
    </NftContext.Provider>
  );
};
