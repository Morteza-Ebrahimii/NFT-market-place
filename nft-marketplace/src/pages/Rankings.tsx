import { useState } from "react";

type Artist = {
  id: number;
  name: string;
  change: number;
  balence: string;
  nftsSold: number;
  volume: number;
  image: string;
  bio: string;
};
import { useArtistContext } from "../context/ArtistContext";

export function Ranking() {
  const { artists } = useArtistContext();

  const timeLine = [
    { time: "1d", name: "Today" },
    { time: "7d", name: "This Week" },
    { time: "30d", name: "This Month" },
    { time: "All Time", name: "All Time" },
  ];
  const [isActive, setisActive] = useState<string | undefined>(
    timeLine[0].name
  );

  return (
    <div className="container  mx-auto px-6 py-6 max-w-sm md:max-w-3xl xl:max-w-5xl xl:py-10">
      {/* the text top of the page */}
      <div className="mt-1 md:mt-5">
        <h1 className="text-2xl font-semibold mb-3 xl:mb-5 md:text-4xl xl:text-5xl">
          Top Creators
        </h1>
        <p className="text-sm md:text-base xl:text-xl">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>

      {/* timeline */}
      <div className="flex flex-row text-center justify-between py-1 md:py-5 my-5 text-label-text">
        {timeLine.map((time) => (
          <div
            key={time.name}
            className={`font-semibold text-sm xl:text-xl border-b-2 ${
              isActive === time.name
                ? "border-label-text text-white translate-2"
                : "border-transparent"
            }`}
            onClick={() => setisActive(time.name)}
          >
            <h3 className="px-3 py-4 md:hidden">{time.time}</h3>
            <h3 className="px-12 xl:px-18 py-4  hidden md:block ">
              {time.name}
            </h3>
          </div>
        ))}
      </div>

      {/* filter section */}
      <div className="flex flex-row justify-between items-center border rounded-3xl border-solid border-background-gray w-full h-10 md:h-12 text-label-text change-numbers-font">
        <div className="flex flex-row p-4 gap-3 xl:gap-8 md:gap-6 ml-2 xl:ml-5 md:ml-3 md:text-lg text-xs">
          <p>#</p>
          <p>Artist</p>
        </div>
        <div className="flex flex-row p-4 xl:gap-24 md:gap-16 text-xs md:text-lg xl:mr-20 md:mr-12 mr-5">
          <p className="hidden md:block">Change</p>
          <p className="hidden xl:block">NFTs sold</p>
          <p>Volume</p>
        </div>
      </div>

      {/* artists ranking */}
      <ArtistsRanking artists={artists} />
    </div>
  );
}

function ArtistsRanking({ artists }: { artists: Artist[] }) {
  return (
    <div className="flex flex-col gap-4 md:gap-5 mt-4">
      {artists.map((artist, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center w-full bg-background-gray py-3 md:py-4  px-2 xl:px-4 rounded-3xl md:rounded-2xl ">
            <div className="flex flex-row items-center gap-2 xl:gap-4">
              <div className="change-numbers-font text-label-text text-[10px] md:text-base md:mx-2 xl:mr-4 xl:ml-1 xl:bg-primary-background rounded-full xl:py-1 px-2 xl:px-3 ">
                {artist.id}
              </div>
              <div>
                <img
                  className="size-5 md:size-6 xl:size-14"
                  src={artist.image}
                  alt={`${artist.id}`}
                />
              </div>
              <div className="text-sm md:text-xl md:font-semibold xl:font-bold ">
                {artist.name}
              </div>
            </div>
            <div className="flex flex-row items-center md:justify-between  xl:justify-around md:w-1/3 xl:w-3/5 ">
              <div
                className={`change-numbers-font hidden md:block md:text-base ${
                  artist.balence === "negetive"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {artist.change}%
              </div>
              <div className="change-numbers-font hidden xl:block text-base">
                {artist.nftsSold}
              </div>
              <div className="text-[11px] font-thin change-numbers-font md:text-base mr-4 md:mr-10 xl:mr-0 ">
                {artist.volume} ETH
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
