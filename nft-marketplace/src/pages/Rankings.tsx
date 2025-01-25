import { useState } from "react";
import { useArtistContext } from "../context/ArtistContext";

export { useArtistContext } from "../context/ArtistContext";

export function Ranking() {
  const { artists } = useArtistContext();
  const [isActive, setisActive] = useState<string | undefined>(undefined);

  const timeLine = [
    { time: "1d", name: "Today" },
    { time: "7d", name: "This Week" },
    { time: "30d", name: "This Month" },
    { time: "All Time", name: "All Time" },
  ];

  return (
    <div className="container  mx-auto px-6 py-6 max-w-sm md:max-w-3xl xl:max-w-5xl xl:py-10">
      <div className="mt-5">
        <h1 className="text-2xl font-semibold mb-3 xl:mb-5 md:text-4xl xl:text-5xl">
          Top Creators
        </h1>
        <p className="text-sm md:text-base xl:text-xl">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
      <div className="flex flex-row text-center justify-between  py-5 my-5 text-label-text">
        {timeLine.map((time) => (
          <div
            key={time.name}
            className={`font-semibold text-base xl:text-xl border-b-2 ${
              isActive === time.name
                ? "border-label-text text-white translate-2"
                : "border-transparent"
            }`}
            onClick={() => setisActive(time.name)}
          >
            <h3 className="px-5 py-4 md:hidden">{time.time}</h3>
            <h3 className="px-12 xl:px-18 py-4  hidden md:block ">{time.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
