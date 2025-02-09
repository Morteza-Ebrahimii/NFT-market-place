import { useState } from "react";
import { useArtistContext } from "../context/ArtistContext";
import { timeLine } from "../data/data";
import { ArtistCard } from "../components/cordComponents/ArtistCard";



export function Ranking() {
  const { artists } = useArtistContext();

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
      <ArtistCard artists={artists} />
    </div>
  );
}
